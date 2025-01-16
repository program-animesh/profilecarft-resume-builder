import { useState } from 'react';
import { NavBarActions, StyledButton } from './atoms';
import { TemplateSelect } from './components/TemplateSelect';
import { ThemeSelect } from './components/ThemeSelect';
import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import { Menu } from '@mui/material';
import { PrintResume } from './components/PrintResume';
import Image from 'next/image';
import Link from 'next/link';

const TOTAL_TEMPLATES_AVAILABLE = Object.keys(AVAILABLE_TEMPLATES).length;

const NavBarLayout = () => {
  const [templateSelectAnchor, setTemplateSelectAnchor] = useState<null | HTMLElement>(null);
  const [themeSelectAnchor, setThemeSelectAnchor] = useState<null | HTMLElement>(null);

  const handleTemplateSelectOpen = (event: React.MouseEvent<HTMLElement>) => {
    setTemplateSelectAnchor(event.currentTarget);
  };

  const handleTemplateSelectClose = () => {
    setTemplateSelectAnchor(null);
  };

  const handleThemeSelectOpen = (event: React.MouseEvent<HTMLElement>) => {
    setThemeSelectAnchor(event.currentTarget);
  };

  const handleThemeSelectClose = () => {
    setThemeSelectAnchor(null);
  };

  return (
    <nav className="h-14 w-full bg-resume-800 flex py-2.5 px-4 xl:px-60 items-center shadow-level-8dp">
      <div className="flex-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image
                src="/icons/profilecarft-logo.svg"
                alt="ProFileCarft"
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="text-white text-xl font-semibold">ProFileCarft</span>
            </div>
          </Link>
        </div>
        <NavBarActions>
          <StyledButton onClick={handleTemplateSelectOpen}>
            Templates ({TOTAL_TEMPLATES_AVAILABLE})
          </StyledButton>
          <StyledButton onClick={handleThemeSelectOpen}>Themes</StyledButton>
        </NavBarActions>
        <NavBarActions>
          <PrintResume />
        </NavBarActions>
      </div>

      <Menu
        anchorEl={templateSelectAnchor}
        open={Boolean(templateSelectAnchor)}
        onClose={handleTemplateSelectClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className="p-2">
          <TemplateSelect />
        </div>
      </Menu>

      <Menu
        anchorEl={themeSelectAnchor}
        open={Boolean(themeSelectAnchor)}
        onClose={handleThemeSelectClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className="p-2">
          <ThemeSelect />
        </div>
      </Menu>
    </nav>
  );
};

export default NavBarLayout;
