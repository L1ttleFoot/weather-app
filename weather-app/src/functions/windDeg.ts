export const windDeg = (deg: number): string => {
    if ((0 <= deg && deg < 22.5) || (337.5 < deg && deg <= 360)) return 'N';
    if (22.5 <= deg && deg < 67.5) return 'NE';
    if (67.5 <= deg && deg < 112.5) return 'E';
    if (112.5 <= deg && deg < 157.5) return 'SE';
    if (157.5 <= deg && deg < 202.5) return 'S';
    if (202.5 <= deg && deg < 247.5) return 'SW';
    if (247.5 <= deg && deg < 292.5) return 'W';
    if (292.5 <= deg && deg < 337.5) return 'NW';

    return '';
};
