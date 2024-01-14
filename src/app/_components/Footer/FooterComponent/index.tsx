"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import { inclusions, noHeaderFooterUrls } from '../../../constants';
import { Gutter } from '../../Gutter';

import classes from './index.module.scss';
import Image from 'next/image';
import { Footer, Media } from '../../../../payload/payload-types';
import Link from 'next/link';
import { Button } from '../../Button';
const FooterComponent = ( { footer }: { footer: Footer }) => {
  const pathname = usePathname();

  const navItems = footer?.navItems || [];
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}> 
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusions) => (
            <li key={inclusions.title}>
              <Image
               src={inclusions.icon} 
              alt={inclusions.title}  
              width={36}
               height={36} 
               className={classes.icon}
               />
               <h5 className={classes.title}>{inclusions.title}</h5>
               <p className={classes.description}>{inclusions.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image
                src="/logo-white.svg"
                alt="logo"
                width={170}
                height={50}
                className={classes.logo}
              />
              </Link>
              <p>{footer.copyright}</p>
              <div className={classes.socialLinks}>
                {navItems.map((item) => {
                  const icon = item?.link?.icon as Media
                  return (
                    <Button
                      key={item.link.label}
                      el="link"
                      href={item.link.url}
                      newTab={true}
                      className={classes.socialLinkItem}
                    >
                      <Image
                      src={icon?.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className={classes.socialIcon}
                    />
                    </Button>
                  )
                })}
              </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
