import FoodBase from './FoodBase';

export default class Negi extends FoodBase {
  protected get assetNameNama() {
    return 'negi_nama';
  }
  protected get assetNameGood() {
    return 'negi_good';
  }
  protected get assetNameKoge() {
    return 'negi_koge';
  }

  getFoodName() {
    return 'negi';
  }
}
