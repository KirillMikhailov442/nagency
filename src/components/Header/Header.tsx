'use client';

import { FC, useEffect, useState } from 'react';
import styles from './Header.module.scss';

import cn from 'clsx';

import logo_img from '@assets/logo.png';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Button from '@components/UI/Button/Button';

import { usePathname } from 'next/navigation';

import { HiMenuAlt3 } from 'react-icons/hi';
import useAppDispatch from '@/hooks/useAppDispatch';
import { toggleComponent } from '@store/slices/showComponents';
import useAppSelector from '@/hooks/useAppSelector';
import { IoCloseSharp } from 'react-icons/io5';

const Header: FC = () => {
  const pathName = usePathname();
  const [showBg, setShowBg] = useState(false);

  const dispatch = useAppDispatch();
  const isShowMobileNav = useAppSelector(
    state => state.showComponents.mobileNavList,
  );

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 100 ? setShowBg(true) : setShowBg(false),
    );
  }, []);

  return (
    <header
      className={cn(
        styles.header,
        { [`${styles.showBg}`]: showBg },
        { [`${styles.showBg}`]: isShowMobileNav },
      )}
    >
      <div className={styles.container}>
        <Link className={styles.logo} href={'/'}>
          <Image src={logo_img} alt="logo" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link
                className={cn(
                  styles.listLink,
                  pathName == '/' && styles.active,
                )}
                href={'/'}
              >
                Home
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                className={cn(
                  styles.listLink,
                  pathName == '/about' && styles.active,
                )}
                href={'/about'}
              >
                About
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                className={cn(
                  styles.listLink,
                  pathName.includes('/service') && styles.active,
                )}
                href={'/service'}
              >
                Service
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                className={cn(
                  styles.listLink,
                  pathName == '/testimonial' && styles.active,
                )}
                href={'/testimonial'}
              >
                Testimonial
              </Link>
            </li>
            <li className={styles.listItem}>
              <Menu>
                <MenuButton
                  className={cn(
                    styles.listLink,
                    [
                      '/contact',
                      '/team',
                      '/projects',
                      '/faq',
                      '/terms',
                      '/policy',
                    ].includes(pathName) && styles.active,
                  )}
                >
                  Pages
                </MenuButton>
                <MenuList className={styles.menuList}>
                  <MenuItem>
                    <Link href={'/contact'}>Contact Us</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'/team'}>Our Team</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'/projects'}>Our Projects</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'/faq'}>FAQ</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'/terms'}>Terms of Conditions</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'/policy'}>Privacy Policy</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </li>
            <li className={styles.listItem}>
              <Link
                className={cn(
                  styles.listLink,
                  pathName == '/pricing' && styles.active,
                )}
                href={'/pricing'}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href={'/contact'}>
                <Button className={styles.button} variant="pink">
                  Contact Us
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => dispatch(toggleComponent('mobileNavList'))}
          className={styles.hamburger}
        >
          {isShowMobileNav ? (
            <IoCloseSharp size={30} />
          ) : (
            <HiMenuAlt3 size={30} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
