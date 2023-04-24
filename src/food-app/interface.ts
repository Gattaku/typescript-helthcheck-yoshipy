export interface Scoreable {
    readonly totalscore: number;
    render(): void;
}

export interface Foodable {
    element: HTMLDivElement;
    clickEventHnadler(): void;
}

export interface Foodsable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}