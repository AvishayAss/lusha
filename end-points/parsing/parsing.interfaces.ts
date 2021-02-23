export interface ParsingIncomeInterface {
    /** Site's url */
    url: string;
}

export interface ParsingOutcomeInterface extends ParsingIncomeInterface {
    /** Site's HTML content as string */
    html: string;
    /** List of URL's that found on HTML string */
    links: string[];
}


export interface ParsingResponseInterface {
    /** Response message */
    message: string
}
