import Material from './Material'

export default class MaterialsModel {
    public materials: Material[];
    public pickedMaterials: number[];

    constructor(materials?: Material[], pickedMaterials?: number[]){
        this.materials = materials?.length !== 0 ? materials : [];
        this.pickedMaterials = pickedMaterials !== undefined ? pickedMaterials : [];

    }

}