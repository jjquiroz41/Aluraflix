import axios from "axios";

export const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/ZASKE99/challenge4-aluraflix'
});

export const listarVideos = async (url, setDatos) => {
    const respuesta = await api.get(url);
    setDatos(respuesta)
} 

export const eliminarVideo = async (id) => {
    const respuesta = await api.delete(`/videos/${id}`);
    return respuesta;
}

export const obtenerVideo = async (id) => {
    const respuesta = await api.get(`/videos/${id}`);
    return respuesta.data;
}

export const crearVideo = async (datos) => {
    const respuesta = await api.post(`/videos`, {
        ...datos
    });
    return respuesta;
}

export const actualizarVideo = async (id, datos) => {
    const respuesta = await api.put(`/videos/${id}`, {
        ...datos
    });
    return respuesta;
}