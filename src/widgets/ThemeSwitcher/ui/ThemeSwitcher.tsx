import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LigthIcon from 'widgets/assets/icons/theme-light.svg';
import DarkIcon from 'widgets/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? (
                <DarkIcon></DarkIcon>
            ) : (
                <LigthIcon></LigthIcon>
            )}
        </Button>
    );
};
