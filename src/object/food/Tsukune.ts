import FoodBase from './FoodBase';

export default class Tsukune extends FoodBase {
  protected get assetNameNama() {
    return 'tsukune_nama';
  }
  protected get assetNameGood() {
    return 'tsukune_good';
  }
  protected get assetNameKoge() {
    return 'tsukune_koge';
  }

  getFoodName() {
    return 'tsukune';
  }
}
