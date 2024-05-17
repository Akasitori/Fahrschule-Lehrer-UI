import { Adresse } from "../shared/adresse";
import { Kontaktdaten } from "../shared/kontaktdaten";

export interface Lehrer{
    id: string;
    vorname: string;
    nachname: string;
    geschlecht: string;
    geburtsdatum: string;
    adresse: Adresse;
    kontaktdaten: Kontaktdaten;
    fuehrerscheinklasse: string[];
    zertifizierterFahrlehrer: boolean;
}

export interface AktualisierterLehrer{
    id: string;
    vorname: string;
    nachname: string;
    adresse: Adresse;
    kontaktdaten: Kontaktdaten;
}