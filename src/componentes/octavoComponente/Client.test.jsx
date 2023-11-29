import { render, screen } from "@testing-library/react";
import { Client } from "./Client";

jest.mock('./Client.css', () => '')
describe('Pruebas a componente', () => {
    test('Validar nombre', () => {
        render(<Client />);
        const nombre = screen.getByText('Camisillas');
        expect(nombre).toBeTruthy();
    });
})