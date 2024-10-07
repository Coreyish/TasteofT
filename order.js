
{    "catalog_object": {
      "type": "ITEM",
      "id": "FX3LTXC2CCFCGHLGMSFLBSDO",
      "updated_at": "2021-06-15T18:48:16.262Z",
      "version": 1623782896262,
      "is_deleted": false,
      "present_at_all_locations": true,
      "item_data": {
        "name": "Coffee",
        "description": "Coffee Drink",
        "abbreviation": "Co",
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "OXRR3XANRU5TEQ3FQMDW5IJK",
            "updated_at": "2021-06-15T18:48:16.262Z",
            "version": 1623782896262,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "FX3LTXC2CCFCGHLGMSFLBSDO",
              "name": "Small",
              "ordinal": 0,
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 300,
                "currency": "USD"
              },
              "stockable": true
            }
          },
          {
            "type": "ITEM_VARIATION",
            "id": "3EFNOI25E4NUK53CU4KMUHXX",
            "updated_at": "2021-06-15T18:48:16.262Z",
            "version": 1623782896262,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "FX3LTXC2CCFCGHLGMSFLBSDO",
              "name": "Large",
              "ordinal": 1,
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 350,
                "currency": "USD"
              },
              "stockable": true
            }
          }
        ],
        "product_type": "REGULAR"
      }
    },
    "id_mappings": [
      {
        "client_object_id": "#coffee",
        "object_id": "FX3LTXC2CCFCGHLGMSFLBSDO"
      },
      {
        "client_object_id": "#small_coffee",
        "object_id": "OXRR3XANRU5TEQ3FQMDW5IJK"
      },
      {
        "client_object_id": "#large_coffee",
        "object_id": "3EFNOI25E4NUK53CU4KMUHXX"
      }
    ]
  }
  
  try {
    const response = await client.catalogApi.upsertCatalogObject({
      idempotencyKey: '{UNIQUE_KEY}',
      object: {
        type: 'TAX',
        id: '#sales_tax',
        taxData: {
          name: 'Drink Tax',
          calculationPhase: 'TAX_SUBTOTAL_PHASE',
          inclusionType: 'ADDITIVE',
          percentage: '7.5',
          appliesToCustomAmounts: true
        }
      }
    });
  
    console.log(response.result);
  } catch(error) {
    console.log(error);
  }
  
  