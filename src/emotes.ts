import Browser from 'webextension-polyfill';

export enum Emotes {
    VTIPNE = 'vtipne',
    ZAJIMAVE = 'zajimave',
    PRINOSNE = 'prinosne',
    ORTAVNE = 'otravne',
    MIMO_TEMA = 'mimo-tema',
    NEMAM_NAZOR = 'nemam-nazor',
}

export const getDefaultEmoteUrl = async (emote: string) => {
    return Browser.runtime.getURL(`assets/${emote}.png`);
};

export const setEmoteUrl = async (emote: Emotes, url: string) => {
    await Browser.storage.local.set({ [emote]: url });
};

export const getEmoteUrl = async (emote: Emotes) => {
    return (await Browser.storage.local.get(emote))[emote] as string;
};
