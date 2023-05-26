const { Schema, model } = require('mongoose')

const orderSchema = new Schema(
  {
    numeroOrden: Number,
    fecha: Date,
    asesor: String,
    kilometraje: String,
    cliente: String,
    celular: String,
    email: String,
    marca: String,
    modelo: String,
    placa: String,
    color: String,
    radio: Boolean,
    encendedor: Boolean,
    pito: Boolean,
    alarma: Boolean,
    llavero: Boolean,
    plumillas: Boolean,
    tapetes: Boolean,
    espejos: Boolean,
    caja_cd: Boolean,
    planta: Boolean,
    dvd: Boolean,
    llanta_repuesto: Boolean,
    gato: Boolean,
    cruceta: Boolean,
    extintor: Boolean,
    kit_carretera: Boolean,
    herramientas: Boolean,
    tapa_gasolina: Boolean,
    copas: Boolean,
    antena: Boolean,
    chapas: Boolean,
    luces: Boolean,
    vidrios_electricos: Boolean,
    tarjeta_propiedad: Boolean,
    seguro_obligatorio: Boolean,
    revision_tecnicomecanica: Boolean,
    poliza_garantia: Boolean,
    observacionesInventario: String,
    descripcionTrabajo: String
  },
  {
    timestamps: true,
    versionKey: false
  })

const Order = model('order', orderSchema)

module.exports = Order