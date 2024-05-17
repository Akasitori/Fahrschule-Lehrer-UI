export interface Termin
{
    id: string;
    beginn: Date;
    ende: Date;
    schuelerId: string;
    lehrerId: string;
    uebungsTyp: string;
    terminDauerInMinuten: number;
    terminStatus: string;
}

export interface Termine
{
    value: Termin[];
}

export interface TerminIdAndStatusOnly
{
    id: string,
    terminStatus: string;
}

export interface NewTermin{
    beginn: string;
    ende: string;
    schuelerId: string;
    lehrerId: string
    uebungsTyp: string;
    terminStatus: string; // terminstatus sollte hier und in der api beim create entfernt werden
}

export interface NewTerminStringFormat{
    beginn: string;
    ende: string;
    schuelerId: string;
    uebungsTyp: string;
    terminStatus: string; // terminstatus sollte hier und in der api beim create entfernt werden
    datum: string;
}