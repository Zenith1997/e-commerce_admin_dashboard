import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { useTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer, { drawerClasses } from '@mui/material/Drawer';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';


import { NavUpgrade } from '../components/nav-upgrade';
import { WorkspacesPopover } from '../components/workspaces-popover';

import type { WorkspacesPopoverProps } from '../components/workspaces-popover';


// ----------------------------------------------------------------------

export type NavContentProps = {
  data: {
    path?: string;
    title: string;
    icon: React.ReactNode;
    info?: React.ReactNode;
    nested?:boolean;
   children?: Array<{
      path?: string;
      title?: string;
    }>;
  }[];
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
  workspaces?: WorkspacesPopoverProps['data'];
  sx?: SxProps<Theme>;
};

export type NestedNavContentProps ={
  menuItems?:{
    path?:string;
    title?:string;
  }[];
  expand?:boolean;
}

export function NavDesktop({
  sx,
  data,
  slots,
  workspaces,
  layoutQuery,
}: NavContentProps & { layoutQuery: Breakpoint }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: 2.5,
        px: 2.5,
        top: 0,
        left: 0,
        height: 1,
        display: 'none',
        position: 'fixed',
        flexDirection: 'column',
        bgcolor: 'var(--layout-nav-bg)',
        zIndex: 'var(--layout-nav-zIndex)',
        width: 'var(--layout-nav-vertical-width)',
        borderRight: `1px solid var(--layout-nav-border-color, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)})`,
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'flex',
        },
        ...sx,
      }}
    >
      <NavContent data={data} slots={slots} workspaces={workspaces} />
    </Box>
  );
}

// ----------------------------------------------------------------------

export function NavMobile({
  sx,
  data,
  open,
  slots,
  onClose,
  workspaces,
}: NavContentProps & { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          pt: 2.5,
          px: 2.5,
          overflow: 'unset',
          bgcolor: 'var(--layout-nav-bg)',
          width: 'var(--layout-nav-mobile-width)',
          ...sx,
        },
      }}
    >
      <NavContent data={data} slots={slots} workspaces={workspaces} />
    </Drawer>
  );
}

// ----------------------------------------------------------------------


export function NestedMenuItems({ menuItems,expand}: NestedNavContentProps) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
  

     
{/* 
      <WorkspacesPopover data={workspaces} sx={{ my: 2 }} /> */}

   
        <Box   component="nav" display={expand?"flex":"none" }flex="1 1 auto" flexDirection="column" >
          <Box component="ul" gap={0.9} display="flex" flexDirection="column">
            {menuItems?.map((item) => {
              const isActived = item.path === pathname;

              return (
                <ListItem  disableGutters disablePadding key={item.title}>
                  <ListItemButton
                    disableGutters
                    
                    component={RouterLink}
                    href={pathname||"/"}
                    sx={{
                      pl: 8,
                      py: 1,
                      gap: 2,
                      pr: 1.5,
                      borderRadius: 0.75,
                      typography: 'body2',
                      fontWeight: 'fontWeightMedium', 
                      color: 'var(--layout-nav-item-color)',
                      minHeight: 'var(--layout-nav-item-height)',
                      ...(isActived && {
                        fontWeight: 'fontWeightSemiBold',
                        bgcolor: 'var(--layout-nav-item-active-bg)',
                        color: 'var(--layout-nav-item-active-color)',
                        '&:hover': {
                          bgcolor: 'var(--layout-nav-item-hover-bg)',
                        },
                      }),
                    }}
                  >
                    <Box component="span" sx={{ width: 24, height: 24 }}>
                      {/* {item.icon} */}
                    </Box>

                    <Box component="span" flexGrow={1}>
                      {item.title}
                    </Box>
                    
                  
           
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        </Box>
     

      
    </>
  );
}


export function NavContent({ data, slots, workspaces, sx }: NavContentProps) {
  const pathname = usePathname();
  console.log(pathname);
  const [expand,setExpand] =useState(false);
  return (
    <>
      <Logo />

      {slots?.topArea}
{/* 
      <WorkspacesPopover data={workspaces} sx={{ my: 2 }} /> */}

      <Scrollbar fillContent>
        <Box   component="nav" display="flex" flex="1 1 auto" flexDirection="column" sx={sx}>
          <Box component="ul" gap={0.9} display="flex" flexDirection="column">
            {data.map((item) => {
              const isActived = item.path === pathname;

              return (
                <>
                  <ListItem  onClick={()=>setExpand((prev:boolean)=>!prev)} disableGutters disablePadding key={item.title}>
                    <ListItemButton

                      disableGutters
                  
                      component={RouterLink}
                      href={item.nested?pathname:item.path??"/"}
                      sx={{
                        pl: 2,
                        py: 1,
                        gap: 2,
                        pr: 1.5,
                        borderRadius: 0.75,
                        typography: 'body2',
                        fontWeight: 'fontWeightMedium',
                        color: 'var(--layout-nav-item-color)',
                        minHeight: 'var(--layout-nav-item-height)',
                        ...(isActived && {
                          fontWeight: 'fontWeightSemiBold',
                          bgcolor: 'var(--layout-nav-item-active-bg)',
                          color: 'var(--layout-nav-item-active-color)',
                          '&:hover': {
                            bgcolor: 'var(--layout-nav-item-hover-bg)',
                          },
                        }),
                      }}
                    >
                      <Box component="span" sx={{ width: 24, height: 24 }}>
                        {item.icon}
                      </Box>
                      <Box component="span" flexGrow={1}>
                        {item.title}
                      </Box>
                      {item.nested&&<Box component="span" sx={{ width: 24, height: 24 }}>
                      <Iconify icon={`meteor-icons:angle-${expand?"up":"down"}`} width="24" height="24" />
                      </Box>}
                      {item.info && item.info}
                  
                    </ListItemButton>
                  </ListItem>
                    {item.nested&& <NestedMenuItems expand={expand} menuItems ={item.children}/>}
                </>
              );
            })}
          </Box>
        </Box>
      </Scrollbar>

      {slots?.bottomArea}

      <NavUpgrade />
    </>
  );
}
