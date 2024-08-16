
const meses = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

export const useFormatDate = () => {

    const FormatDate = (fechaISO: string) => {

        const fecha = new Date(fechaISO);
        const dia = fecha.getDate();
        const mes = meses[fecha.getMonth()];
        const anio = fecha.getFullYear();
        const horas = String(fecha.getHours()).padStart(2, '0');
        const minutos = String(fecha.getMinutes()).padStart(2, '0');

        return `${dia} de ${mes} del ${anio} a las ${horas}:${minutos}`;

    }

    return {
        FormatDate
    }


}
