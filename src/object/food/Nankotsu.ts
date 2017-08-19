import FoodBase from './FoodBase';

export default class Nankotsu extends FoodBase {
  protected get assetNameNama() {
    return 'nankotsu_nama';
  }
  protected get assetNameGood() {
    return 'nankotsu_good';
  }
  protected get assetNameKoge() {
    return 'nankotsu_koge';
  }

  getFoodName() {
    return 'nankotsu';
  }
}
