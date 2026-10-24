import { useAtom } from 'jotai'
import { useMemo } from 'react'

import { Tags, Tag } from '@components'
import { Group as IGroup, Proxies as IProxy } from '@lib/request'
import { useProxy, useConfig, proxyMapping, useClient } from '@stores'

import './style.scss'

// Adapters whose delay probe always fails, so a timeout says nothing about them.
export const unprobeableProxyTypes = new Set([
    'Direct',
    'Reject',
    'RejectDrop',
    'Pass',
    'PassRule',
    'Rematch',
    'Compatible',
    'Dns',
])

interface GroupProps {
    config: IGroup
}

export function Group (props: GroupProps) {
    const { markProxySelected, groups } = useProxy()
    const [proxyMap] = useAtom(proxyMapping)
    const { data: Config } = useConfig()
    const client = useClient()
    const { config } = props

    async function handleChangeProxySelected (name: string) {
        await client.changeProxySelected(props.config.name, name)
        markProxySelected(props.config.name, name)
        if (Config.breakConnections) {
            const list: string[] = []
            const snapshot = await client.getConnections()
            for (const connection of snapshot.data.connections) {
                if (connection.chains.includes(props.config.name)) {
                    list.push(connection.id)
                }
            }

            await Promise.all(list.map(id => client.closeConnection(id)))
        }
    }

    const errSet = useMemo(() => {
        const set = new Set<string>()
        for (const proxy of config.all) {
            const history = proxyMap.get(proxy)?.history
            if (history?.length && history.slice(-1)[0].delay === 0) {
                set.add(proxy)
            }
        }

        return set
    }, [config.all, proxyMap])

    // Nested policy groups are members of other groups, keep them always visible.
    const groupNames = useMemo(() => new Set(groups.map(g => g.name)), [groups])

    // Mirrors FlClash's computeHideTimeout(): hide proxies whose last test timed out,
    // but never hide the current selection, nested groups, adapters that cannot be
    // probed, or proxies that have not been tested yet (no data is not a timeout).
    const visibleList = useMemo(() => {
        if (!Config.hideTimeoutProxies) {
            return config.all
        }

        const kept = config.all.filter(name => {
            if (name === config.now) return true
            if (groupNames.has(name)) return true

            const proxy = proxyMap.get(name)
            if (proxy == null) return true
            if (unprobeableProxyTypes.has(proxy.type)) return true
            if (!proxy.history?.length) return true

            return proxy.history.slice(-1)[0].delay !== 0
        })

        // Hiding everything would take away the only way to pick a proxy again.
        return kept.length > 0 ? kept : config.all
    }, [Config.hideTimeoutProxies, config.all, config.now, proxyMap, groupNames])

    const canClick = config.type === 'Selector'
    return (
        <div className="proxy-group">
            <div className="flex h-10 mt-4 w-full items-center justify-between md:(h-15 mt-0 w-auto) ">
                <span className="h-6 px-5 w-35 overflow-hidden overflow-ellipsis whitespace-nowrap md:w-30">{ config.name }</span>
                <Tag className="mr-5 md:mr-0">{ config.type }</Tag>
            </div>
            <div className="flex-1 py-2 md:py-4">
                <Tags
                    className="ml-5 md:ml-8"
                    data={visibleList}
                    onClick={handleChangeProxySelected}
                    errSet={errSet}
                    select={config.now}
                    canClick={canClick}
                    rowHeight={30} />
            </div>
        </div>
    )
}
