import React from 'react';
import { useState, useEffect } from 'react';

import './App.scss';

import shidLogo from './assets/shid_emozhl_logo.svg';
import gcLogo from './assets/GC_logo.svg';
import ITNLogo from './assets/ITN_logo.svg';

import HeroBlock from './components/HeroBlock/HeroBlock';
import Facts from './components/Facts/Facts';
import {FactsMobile} from "./components/Facts/Facts";
import SectorsList from './components/Sectors/SectorsList';
import Footer from './components/Footer/Footer';
import AirQuality from "./components/AirQuality/AirQuality";


// for responsive design 
import HeroBlockMobile from './components/HeroBlock/HeroBlockMobile';
import {useWindowSize} from "./utils/screenSize"; 
import FooterMobile from './components/Footer/FooterMobile';
import shidLogo_mobile from './assets/mobile/shid_emozhl_logo_white_1.svg';
import gcLogo_mobile from './assets/mobile/GC_2.svg';
import ITNLogo_mobile from './assets/mobile/ITN_mix_1.svg';
import sandwich from './assets/mobile/sandwich.svg';

function App() {
  
  const size = useWindowSize();

  const partners = [shidLogo, ITNLogo, gcLogo];
  const partners_mobile_header = [shidLogo_mobile, ITNLogo_mobile, gcLogo_mobile];
  const partners_mobile_footer = [shidLogo_mobile, ITNLogo_mobile, gcLogo_mobile];
  
  const navLinks = [
    {
      title: "Основные факты",
      href:  "#facts"  
    },
    {
      title: "Индекс качества воздуха",
      href: "#index"  
    },
    {
      title: "Политика по уменьшению загрязнений",
      href: "#politics"  
    },
  ];
  const factSlides = [
  {
    id: '1332',
    imgUrl: require("./assets/facts-slider/slide-1.jpg"),
    description: 'Женщины и дети - главные жертвы загрязнения воздуха'
  },
  {
    id: '1333',
    imgUrl: require("./assets/facts-slider/slide-2.jpg"),
    description: 'Защитники окружающей среды подвергаются преследованиям'
  },
  {
    id: '1334',
    imgUrl: require("./assets/facts-slider/slide-3.jpg"),
    description: 'Загрязнение воздуха – нарушение прав человека'
  },
  {
    id: '1335',
    imgUrl: require("./assets/facts-slider/slide-4.jpg"),
    description: '4,2 миллиона случаев преждевременной смерти людей из-за загрязнения \n" + "атмосферного воздуха'
  },
  {
    id: '1336',
    imgUrl: require("./assets/facts-slider/slide-5.jpg"),
    description: 'Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год.'
  }
];
  const sectors = [
  {
    name: "Промышленность",
    imgUrl: require('./assets/sectors/industry.jpg'),
    description: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)"
  },
  {
    name: "Транспорт",
    imgUrl: require('./assets/sectors/transport.jpg'),
    description: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы"
  },
  {
    name: "Городское планирование",
    imgUrl: require('./assets/sectors/city-planning.jpg'),
    description: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов"
  },
  {
    name: "Энергия",
    imgUrl: require('./assets/sectors/energy.jpg'),
    description: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения"
  },
  {
    name: "Энергетика",
    imgUrl: require('./assets/sectors/energetics.jpg'),
    description: "Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)"
  },
  {
    name: "Утилизация отходов",
    imgUrl: require('./assets/sectors/utilization.jpg'),
    description: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов"
  },
];

  const author = "Никитой Ямником";
	const designer = "Валерией Бубырь";

  return (
    <>
      {size.width > 1010 && <HeroBlock title="Качество атмосферного воздуха и здоровье" logos={partners} links={navLinks}/>}
      {size.width <= 1010 && <HeroBlockMobile title="Качество атмосферного воздуха и здоровье" logos={partners_mobile_header} links={navLinks}/>}

      {size.width > 1250 && <Facts title="Основные факты" slides={factSlides}/>}
      {size.width <= 1250 && <FactsMobile title="Основные факты" slides={factSlides}/>}

      <AirQuality/>          
      
      <SectorsList title="Политика по уменьшению загрязнений" 
                   subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
                   items={sectors}/>
         
      {size.width > 1010 && <Footer links={navLinks} partners={partners} author={author} designer={designer}/>}
      {size.width <= 1010 && <FooterMobile links={navLinks} partners={partners_mobile_footer} author={author} designer={designer}/>}
    </>
  );
}

export default App;