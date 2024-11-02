import { formatDistanceToNow, format, parseISO, isValid } from 'date-fns';
import { enUS } from 'date-fns/locale';

type DateStyle = 'full' | 'relative' | 'short' | 'long';

export function formatDate(dateString: string, style: DateStyle = 'full'): string {
    try {
        const date = parseISO(dateString);

        if (!isValid(date)) {
            throw new Error('Invalid date');
        }

        switch (style) {
            case 'relative':
                return formatDistanceToNow(date, {
                    addSuffix: true,
                    locale: enUS
                });

            case 'short':
                return format(date, 'MMM d, yyyy', {
                    locale: enUS
                });

            case 'long':
                return format(date, 'MMMM d, yyyy', {
                    locale: enUS
                });

            case 'full':
            default:
                return format(date, 'MMMM d, yyyy • h:mm a', {
                    locale: enUS
                });
        }
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid date';
    }
}

// Helper functions for specific date formats
export function formatShortDate(dateString: string): string {
    return formatDate(dateString, 'short');
}

export function formatLongDate(dateString: string): string {
    return formatDate(dateString, 'long');
}

export function formatRelativeDate(dateString: string): string {
    return formatDate(dateString, 'relative');
}

// Function to check if a date is recent (within last 7 days)
export function isRecent(dateString: string): boolean {
    try {
        const date = parseISO(dateString);
        const now = new Date();
        const diffInDays = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
        return diffInDays <= 7;
    } catch {
        return false;
    }
}

// Format with smart date display (relative if recent, full date if older)
export function formatSmartDate(dateString: string): string {
    if (isRecent(dateString)) {
        return formatRelativeDate(dateString);
    }
    return formatShortDate(dateString);
}
