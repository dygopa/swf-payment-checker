let URL = import.meta.env.VITE_PUBLIC_API_URL ?? ""

export const CHECK_USER_ID_ENDPOINT = (id) => URL + `/polizas/get_link_pago_asegurado?identificacion=${id}`;