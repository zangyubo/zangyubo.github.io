// Learn how to customize the theme: https://rspress.rs/guide/basic/custom-theme
import './index.css';
import {
  LastUpdated,
  Layout as BasicLayout,
  Banner,
  PrevNextPage,
} from '@rspress/core/theme-original';
import { useLang } from '@rspress/core/runtime';

export * from '@rspress/core/theme-original';

export function DocFooter() {
  return (
    <footer className="rp-doc-footer">
      <div className="rp-doc-footer__edit">
        <div className="site-author">by -- navrow</div>
        <LastUpdated />
      </div>
      <div className="rp-doc-footer__divider" />
      <PrevNextPage />
    </footer>
  );
}

export function Layout() {
  const lang = useLang();

  return (
    <BasicLayout
      beforeNav={
        <Banner
          href="/guide/start/introduction.html"
          message={
            lang === 'en' ? 'Website is under development' : '网站开发中'
          }
        />
      }
    />
  );
}
