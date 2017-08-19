import FoodBase from './FoodBase';

export default class Heart extends FoodBase {
  protected get assetNameNama() {
    return 'heart_nama';
  }
  protected get assetNameGood() {
    return 'heart_good';
  }
  protected get assetNameKoge() {
    return 'heart_koge';
  }

  getFoodName() {
    return 'heart';
  }
}
