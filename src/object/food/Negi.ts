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
  protected get goodGrillSec() {
    return 7;
  }
  protected get kogeGrillSec() {
    return 10;
  }

  get foodName() {
    return 'negi';
  }
}
