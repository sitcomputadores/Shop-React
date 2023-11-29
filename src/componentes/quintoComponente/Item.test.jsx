import { render, screen } from "@testing-library/react";
import { Item } from "./Item";

jest.mock('./Item.css', () => '')
describe('Pruebas a componente', () => {
    test('Validar atributos', () => {
        render(<Item  url={''} name={'T-Shirt'} price={'600000'} />);
        const name = screen.getByText('T-Shirt');
        const price = screen.getByText('600000');
        expect(name).toBeTruthy();
        expect(price).toBeTruthy();
    });
})