import { Adresse } from "../shared/adresse";
import { Kontaktdaten } from "../shared/kontaktdaten";

export interface Schueler
{
    id: string;
    vorname: string;
    nachname: string;
    geschlecht: string;
    geburtsdatum: string;
    adresse: Adresse;
    kontaktdaten: Kontaktdaten;
    datumDerAnmeldung: Date;
    status: string;
    fuererscheinklasse: string;
    getriebeTyp: string;
    lehrerId?: string;
}

export interface Schuelers {
    value: Schueler[];
}