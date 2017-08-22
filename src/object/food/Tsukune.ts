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
  protected get goodGrillSec() {
    return 7;
  }
  protected get kogeGrillSec() {
    return 10;
  }

  get foodName() {
    return 'tsukune';
  }
}
