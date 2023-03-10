import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation';
import ModelManager from '../../utils/modelmanager';
import Image from '../image';

import vsBrand from '../../media/vs-brand.svg';
import pinkBrand from '../../media/pink-brand.svg';
import beautyBrand from '../../media/beauty-brand.svg';

import './header.css';

const Header = ({ data, config, className, context }) => {
  const content = data.screen.body.header;

  const fadeOutHandler = () => {
    if (document.querySelector('#flyout') && document.querySelector('#flyout').getAttribute('aria-expanded')) return;
    const hero = document.querySelector('header');
    if (!hero) return;

    const distanceToTop = window.pageYOffset + hero.getBoundingClientRect().top;
    const elementHeight = hero.offsetHeight;
    const scrollTop = document.documentElement.scrollTop;

    let opacity = 1;

    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }

    if (opacity >= 0) {
      hero.style.opacity = opacity;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fadeOutHandler);
  }), [];


  const title = content._metadata && content._metadata.stringMetadata.map(item => {
    if (item.name === 'title') return item.value;
    else return '';
  });

  return (
    <header className={`home-${content.teaser ? 'hero' : 'article'} ${className}`} role='banner' data-fragment={content._path} data-model={title && title.join('')}>

      <div className='fixed-scroll'>
        <div className='top-content header-promo'>
          <div className='message-box'>
            <p><strong>GET IT BY VALENTINE&apos;S DAY | ORDER BY FEBRUARY 9TH</strong></p>
            <p>LIMITED TIME. FREE SHIPPING ON A $50+ PURCHASE.<a href=''>DETAILS</a></p>
          </div>
          <button>VIEW OFFERS</button>
        </div>
        <div className='top-content brand-nav'>
          <div>
            <a href='#' className='navItem'><img src={vsBrand} /></a>
            <img src={pinkBrand} />
            <img src={beautyBrand} />

          </div>
          <div>
            <a href="javascript:viewGQL.viewGQL()" className='button'>View GraphQL</a>
          </div>
        </div>
      </div>

      <div className='site-name'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 764.57 59.16' aria-label='Victoria&apos;s Secret Home' role='img'>
          <title>Victoria&apos;s Secret Home</title>
          <g data-name='Layer 2'>
            <path d='M7.73 7.09C5.92 2.63 4 1.59 0 1.59V.41h17.26v1.11c-3 .14-4 .63-4 1.81 0 1.67.77 2.92 17.33 46.63L46.9 8.83a19.15 19.15 0 0 0 1.54-5.43c0-1.81-2.3-1.74-4-1.88V.41H59l-.14 1.18c-4.38.35-5.64 1.39-7.31 5.5l-21.27 50.6c-.42 1-.76 1.32-1.12 1.32s-.83-.42-1.11-1.11zm76.79 51.23H67.26v-1.19h.28c4.66 0 4.73-3.06 4.73-9.19V16.08c0-6.06-.77-7-5.22-7.24V7.72h15.87V9c-4.94 0-5 1.25-5 9.19V48c0 7.45.41 9.12 6.61 9.12v1.25zm53.59-9.25c-2.57 5.92-8.42 10-17.61 10-15.87 0-25.61-10.92-25.61-26 0-14.06 9.88-26.17 26.52-26.17A39 39 0 0 1 136.3 10c.77.28 1 .49 1 1.18l-.49 10.16h-1.11c-.07-2.85-.7-6.26-2.93-8.07-3.06-2.5-6.61-3.83-12.46-3.83-13.43 0-19.42 10.16-19.42 22.34s6.54 24.7 20.25 24.7c7.73 0 12.81-2.92 15.45-7.86.56-1.11.76-1.25 1.39-1.11s.61.49.13 1.56zm52.55-32.85h-1.18c-.42-3.9-.7-5.29-6.89-5.29h-9.67v37.45c0 7.86.84 8.7 6.47 8.7v1.25h-17.26v-1.19c4.32 0 4.87-2 4.87-7.31v-38.9h-8.29c-6.68 0-8.14.21-8.35 5.29h-1.25l-.28-8.49s6.82.42 9.81.42h23a76.38 76.38 0 0 0 9.19-.35l.07.07zm34.25 42.91c-18.17 0-25.75-14.2-25.75-26.16 0-10.72 7.79-26 26.17-26 15 0 26.1 9.39 26.1 24.91-.01 14.93-10.43 27.25-26.52 27.25zm-.07-49.9c-11.06 0-19.42 7.31-19.42 21.92 0 15.45 9.33 25.4 21.3 25.4 6 0 18.37-3.41 18.37-22.75 0-15.94-9.74-24.57-20.25-24.57zm82.68 49.09h-5.78c-7 0-9.53-4.73-13.29-10.72-3.2-5-6.47-12.11-10.93-12.39l-3.06-.21c-.35 0-.49.07-.49.63v13.08c0 7.86 1.39 8.35 6.61 8.35v1.25h-17v-1.19c4-.21 4.87-.69 4.87-8.35V13.69c0-3.62-2.16-4.59-5.85-4.59V7.85h17.54c9.46 0 15.87 4.25 15.87 12.39 0 6.61-5.43 12.18-11.27 14.13 5 1.88 9.12 13.29 13.29 17.67s5.91 5 9.47 5v1.27zm-27.07-25c6.13 0 9.95-4.59 9.95-11.62 0-7.45-4.52-11.69-11.48-11.69-3.76 0-4.94.07-4.94 1.18v20.6c0 .69.07.9 1.18 1.18a52.33 52.33 0 0 0 5.29.37zm54.9 25h-17.26v-1.19h.28c4.66 0 4.74-3.06 4.74-9.19V16.08c0-6.06-.77-7-5.22-7.24V7.72h15.87V9c-4.94 0-5 1.25-5 9.19V48c0 7.45.41 9.12 6.61 9.12v1.25zm43.34-1.18c2.51-.14 3.48-.69 3.48-1.67a6 6 0 0 0-.7-2.79l-5.29-13.92a.61.61 0 0 0-.63-.42h-14.27a.72.72 0 0 0-.69.56L357 49.62a21.92 21.92 0 0 0-1.36 5.38c0 1.46 1.39 2 4.11 2.09v1.25h-14.61l.21-1.19c4.38-.35 5.71-2 7.24-6.12L367.9 9.32c.83-2.23 1-2.37 1.39-2.37s.62.28 1.46 2.37l15.94 41.13c1.53 4 3.2 6.54 7.72 6.54l.21 1.32h-15.94v-1.17zM375 35.78v-.07l-6.33-18.16c-.14-.42-.28-.76-.49-.76s-.35.28-.49.76l-5.91 18c0 .07-.07.14-.07.21s.13.21.28.21h12.81c.13-.05.2-.05.2-.19zm20.29-21.03c1.82-.17 2.71-2.7 3-3.68a4.54 4.54 0 0 0 .23-2.43c-.28-.85-1.05-1.16-1.87-1.62a3.25 3.25 0 0 1-1.15-.94A2.4 2.4 0 0 1 395 4a2.36 2.36 0 0 1 2.91-1.67c2.25.48 3.37 2.87 3.09 6.48-.1 1.31-1.18 6.53-5.69 6.81zM425.91 59c-4 0-7.86-.21-12-2.78v-9.64h1.26c.21 7.38 5.28 10 11.41 10 6.89 0 10.51-4.46 10.51-8.63 0-5.36-3.21-8.56-10.44-13.15-9.61-6-12.11-10.58-12.11-15.52 0-7 5.43-12.39 14.13-12.39a27.14 27.14 0 0 1 11 2.09v8h-1.25a13.24 13.24 0 0 0-1.32-4.25c-.42-.69-2.43-3.55-9.19-3.55-5.22 0-9 3.34-9 8.08 0 4.45 3.41 7.24 11.28 12.45 7.72 5.15 11.48 10.16 11.63 15.45-.04 8.18-6.38 13.84-15.91 13.84zm57.67-3V45.59H485c.63 8.7 6.47 11.34 13.43 11.34 8 0 12.39-5.22 12.39-10.51 0-6.12-4-9.88-12.1-15-11-7-13.64-12.39-13.64-17.47-.03-8.1 6.1-13.95 16.53-13.95a43.29 43.29 0 0 1 12 2.23v8.63h-1.39a12.48 12.48 0 0 0-1.53-4.59c-.56-.9-3-4.25-10.78-4.25-6.2 0-10.72 4-10.72 9.6 0 5.36 4.11 8.56 13.08 14.55 8.77 5.85 13.08 11.48 13.08 17.4 0 14.69-14.68 15.59-18.3 15.59-8.81.01-13.47-3.16-13.47-3.16zm78.68-6.59-.14 8.91h-33.61v-1.25c3.48-.07 4.93-.91 4.93-7.38V13.57c0-3.2-2.15-4.38-5.91-4.38V7.87c2.78.21 6.68.35 10.3.35 2.78 0 9.88 0 14.34-.07 1.39 0 8.21-.21 8.21-.28l-.14 8.56H559c-.28-5.29-3.41-5.71-9.53-5.71 0 0-7.58-.07-9.74-.07-.69 0-.77.21-.77.69V29.5c0 .35 0 .7.42.7h11.9c2.23 0 3.06-.76 3.48-2.78h1.32v10.65h-1.32c-.14-2.37-.21-4.59-4-5-2-.21-10.23-.35-11.35-.35a.44.44 0 0 0-.49.49v19.2c.14 3.48.21 3.48 8.84 3.48 2.79 0 8.91-.07 10.37-.77 2-1 2.65-2.78 2.86-5.71zm53.86-.34c-2.57 5.92-8.42 10-17.61 10-15.87 0-25.61-10.92-25.61-26 0-14.06 9.88-26.17 26.51-26.17a39.1 39.1 0 0 1 14.9 3.1c.76.28 1 .49 1 1.18l-.49 10.16h-1.11c-.07-2.85-.7-6.26-2.92-8.07-3.06-2.51-6.61-3.83-12.46-3.83-13.43 0-19.42 10.16-19.42 22.34s6.54 24.7 20.25 24.7c7.73 0 12.81-2.92 15.45-7.86.57-1.11.77-1.25 1.39-1.11s.61.49.12 1.56zm55.6 9.25h-5.78c-7 0-9.53-4.73-13.29-10.72-3.2-5-6.48-12.11-10.93-12.39l-3.06-.21c-.35 0-.49.07-.49.63v13.08c0 7.86 1.4 8.35 6.61 8.35v1.25h-17v-1.19c4-.21 4.88-.69 4.88-8.35V13.69c0-3.62-2.16-4.59-5.85-4.59V7.85h17.54c9.46 0 15.87 4.25 15.87 12.39 0 6.61-5.43 12.18-11.28 14.13 5 1.88 9.12 13.29 13.3 17.67s5.91 5 9.47 5v1.27zm-27.07-25c6.12 0 10-4.59 10-11.62 0-7.45-4.53-11.69-11.49-11.69-3.76 0-4.94.07-4.94 1.18v20.6c0 .69.07.9 1.18 1.18a52.09 52.09 0 0 0 5.25.37zm68.64 16.09-.14 8.91h-33.61v-1.25c3.48-.07 4.94-.91 4.94-7.38V13.57c0-3.2-2.16-4.38-5.92-4.38V7.87c2.78.21 6.68.35 10.3.35 2.78 0 9.88 0 14.34-.07 1.39 0 8.21-.21 8.21-.28l-.14 8.56H710c-.28-5.29-3.42-5.71-9.54-5.71 0 0-7.58-.07-9.75-.07-.69 0-.76.21-.76.69V29.5c0 .35 0 .7.41.7h11.9c2.23 0 3.06-.76 3.48-2.78h1.32v10.65h-1.32c-.14-2.37-.21-4.59-4-5-2-.21-10.23-.35-11.34-.35a.44.44 0 0 0-.49.49v19.2c.14 3.48.21 3.48 8.84 3.48 2.79 0 8.91-.07 10.37-.77 2-1 2.65-2.78 2.85-5.71zm51.06-33.19h-1.19c-.41-3.9-.69-5.29-6.88-5.29h-9.67v37.45c0 7.86.83 8.7 6.47 8.7v1.25h-17.26v-1.19c4.31 0 4.87-2 4.87-7.31v-38.9h-8.28c-6.68 0-8.14.21-8.35 5.29h-1.25l-.29-8.49s6.83.42 9.82.42h23a76.38 76.38 0 0 0 9.19-.35l.07.07z' data-name='Layer 1'></path>
          </g>
        </svg>
      </div>

      <Navigation className={content.navigationColor} config={config} screen={data} context={context} />

      {content.teaser &&
        <ModelManager
          key={`${content.teaser.__typename
            .toLowerCase()
            .replace(' ', '-')}-entity-header`}
          type={content.teaser.__typename}
          content={content.teaser}
          config={config.configurationByPath.item}
        ></ModelManager>}

      {content.banner && !content.teaser &&
        <Image src={content.banner._publishUrl} config={config.configurationByPath.item} />
      }
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object,
  content: PropTypes.object,
  className: PropTypes.string,
  context: PropTypes.object
};

export default Header;