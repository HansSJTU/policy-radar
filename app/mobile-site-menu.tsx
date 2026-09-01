'use client';

import { useState, type ReactNode } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  Clock3,
  FileText,
  GitFork,
  GraduationCap,
  Menu,
} from 'lucide-react';

import { getGitHubProjectLink } from '@/app/github-project';
import type { Language } from '@/app/language';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type MobileSiteMenuProps = {
  current: 'home' | 'updates' | 'stats';
  language: Language;
};

type MenuItem = {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
  current?: boolean;
  external?: boolean;
};

export function MobileSiteMenu({ current, language }: MobileSiteMenuProps) {
  const [open, setOpen] = useState(false);
  const english = language === 'en';
  const home = english ? '/?lang=en' : '/';
  const github = getGitHubProjectLink(language);
  const copy = english
    ? { label: 'Open site menu', title: 'Navigate', policies: 'Policies', schools: 'CPT Schools', updates: 'Updates', stats: 'Traffic' }
    : { label: '打开网站菜单', title: '页面导航', policies: '政策', schools: 'CPT 学校', updates: '更新记录', stats: '访问统计' };
  const items: MenuItem[] = [
    {
      id: 'policies',
      label: copy.policies,
      href: `${home}#ranking`,
      icon: <FileText aria-hidden="true" />,
    },
    {
      id: 'schools',
      label: copy.schools,
      href: `${home}#cpt-schools`,
      icon: <GraduationCap aria-hidden="true" />,
    },
    {
      id: 'updates',
      label: copy.updates,
      href: english ? '/updates?lang=en' : '/updates',
      icon: <Clock3 aria-hidden="true" />,
      current: current === 'updates',
    },
    {
      id: 'stats',
      label: copy.stats,
      href: english ? '/stats?lang=en' : '/stats',
      icon: <BarChart3 aria-hidden="true" />,
      current: current === 'stats',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: github.href,
      icon: <GitFork aria-hidden="true" />,
      external: true,
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className="mobile-menu-trigger"
        aria-label={copy.label}
      >
        <Menu aria-hidden="true" />
      </PopoverTrigger>
      <PopoverContent
        className="mobile-site-menu"
        align="end"
        side="bottom"
        sideOffset={10}
      >
        <strong className="mobile-site-menu-title">{copy.title}</strong>
        <nav aria-label={copy.title}>
          {items.map((item) => (
            <a
              className={item.current ? 'active' : undefined}
              href={item.href}
              key={item.id}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              aria-current={item.current ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              <span>{item.icon}</span>
              <strong>{item.label}</strong>
              {item.external ? <ArrowUpRight aria-hidden="true" /> : null}
            </a>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  );
}
