import TableActions from './_templates/TableActions.jsx';

import TableConstants from '../constants/TableConstants.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.jsx';

var ProductActions = new TableActions(
    TableConstants,
    ApiEndpoints.PRODUCTS
);

export default ProductActions;