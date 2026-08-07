import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Navrow',
  description: 'A multilingual Rspress documentation site.',
  lang: 'zh',
  icon: '/rspress-icon.png',
  llms: true,
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'My Site',
      description: 'A multilingual Rspress documentation site.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: '我的站点',
      description: '一个多语言 Rspress 文档站点。',
    },
  ],
  themeConfig: {
    lastUpdated: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/zangyubo',
      },
    ],

    llmsUI: {
      viewOptions: ['markdownLink', 'chatgpt', 'claude'],
      placement: 'outline',
    },
  },
});
