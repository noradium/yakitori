import FoodBase from './FoodBase';

export default class Momo extends FoodBase {
  protected get assetNameNama() {
    return 'momo_nama';
  }
  protected get assetNameGood() {
    return 'momo_good';
  }
  protected get assetNameKoge() {
    return 'momo_koge';
  }

  getFoodName() {
    return 'momo';
  }
}
