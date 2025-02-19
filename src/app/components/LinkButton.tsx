'use Client';
import Link from 'next/link'
import Image from 'next/image'
import type { linkInfo } from '../types'

export function LinkButton({ icon_src, text, colors, url, callBack }: linkInfo) {
    return <Link
        className="link"
        style={{ background: `linear-gradient(to right, ${colors.join(", ")})` }}
        href={`${url ? url : ""}`}
        onClick = { callBack ? (e) => {
            e.preventDefault()
            callBack()
        } : undefined}
    >
    { icon_src && <Image
        src={icon_src}
        alt={text}
        width={0}
        height={0}
        sizes="100vw"
    />}
<span>{text}</span>
    </Link >
  }