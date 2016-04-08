import TableActions from './_templates/TableActions.jsx';

import ProductConstants from '../constants/ProductConstants.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.js';

var ProductActions = new TableActions(
    ProductConstants,
    ApiEndpoints.PRODUCTS
);

export default ProductActions;