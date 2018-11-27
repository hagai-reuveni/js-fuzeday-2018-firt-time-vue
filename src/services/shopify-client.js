import Client from 'shopify-buy';
import { creds } from '../conf';

const client = Client.buildClient({
	domain: creds.domain,
	storefrontAccessToken: creds.token
});

const fetchAll = function() {
	return client.product.fetchAll();
}

const fetchById = function(id) {
	return 'hello';
}

export {client};
