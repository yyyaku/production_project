import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher></ThemeSwitcher>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={'/'}
                    className={cls.mainLink}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={'/about'}
                    className={cls.mainLink}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
