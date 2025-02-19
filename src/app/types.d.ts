import { Url } from "next/dist/shared/lib/router/router"

export type linkInfo = {
    icon_src?: string
    text: string
    colors: `#${string}`[]
    url?: string
    callBack?: MouseEventHandler<HTMLAnchorElement>
}