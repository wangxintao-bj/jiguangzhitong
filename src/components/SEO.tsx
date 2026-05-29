import { Helmet } from 'react-helmet-async'

interface SEOProps {
  titleZh: string
  titleEn: string
  descriptionZh: string
  descriptionEn: string
  path: string
}

/** 每个页面使用 <SEO> 组件覆盖页面的 title 和 meta description */
export default function SEO({ titleZh, titleEn, descriptionZh, descriptionEn, path }: SEOProps) {
  const site = 'www.jgzt.cn'
  const zhTitle = `${titleZh} | 无锡集光智通科技有限公司`
  const enTitle = `${titleEn} | Jiguang Zhitong Technology`
  const zhDesc = descriptionZh
  const enDesc = descriptionEn

  return (
    <Helmet>
      {/* 中文 meta */}
      <title>{zhTitle}</title>
      <meta name="description" content={zhDesc} />
      <html lang="zh-CN" />

      {/* hreflang 多语言标记 (P5) */}
      <link rel="alternate" href={`https://${site}/${path}`} hrefLang="zh-CN" />
      <link rel="alternate" href={`https://${site}/en/${path}`} hrefLang="en" />
      <link rel="alternate" href={`https://${site}/${path}`} hrefLang="x-default" />

      {/* Open Graph */}
      <meta property="og:title" content={zhTitle} />
      <meta property="og:description" content={zhDesc} />
      <meta property="og:url" content={`https://${site}/${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="zh_CN" />

      {/* Canonical */}
      <link rel="canonical" href={`https://${site}/${path}`} />
    </Helmet>
  )
}
