var g_accessLevels = { 
	PUBLIC: 1 
	,REGISTERED: 2 
	,EMAIL_VERIFIED: 3 
	,REDFIN_AGENT: 4 
	,HIDDEN: 5 
	,idToObj: { 
		1: { id: 1, name: "PUBLIC", displayName: "Public" } 
		,2: { id: 2, name: "REGISTERED", displayName: "Registered" } 
		,3: { id: 3, name: "EMAIL_VERIFIED", displayName: "Email Verified" } 
		,4: { id: 4, name: "REDFIN_AGENT", displayName: "Agent" } 
		,5: { id: 5, name: "HIDDEN", displayName: "Hidden" } 
	} 
}; 
var g_agentFeedback = { 
	HEAVY_TOUR_ACTIVITY: 1 
	,OPEN_FLOORPLAN: 2 
	,LOTS_OF_LIGHT: 4 
	,NEEDS_WORK: 8 
	,KILLER_VIEWS: 16 
	,BIG_BACKYARD: 32 
	,MUST_SEE_PROPERTY: 64 
	,STREET_NOISE: 128 
	,idToObj: { 
		1: { id: 1, description: "While the agent was out on tour, they noted heavy tour activity that indicated a lot of interest. This home may go fast.", name: "HEAVY_TOUR_ACTIVITY", displayName: "Heavy Tour Activity" } 
		,2: { id: 2, description: "An open floorplan makes use of large, open spaces by combining several smaller rooms into a larger great room. For example, a kitchen might flow into the dining room, maximizing space and light.", name: "OPEN_FLOORPLAN", displayName: "Open Floorplan" } 
		,4: { id: 4, description: "The agent noted that this home had a lot of natural light on the inside.", name: "LOTS_OF_LIGHT", displayName: "Lots of Light" } 
		,8: { id: 8, description: "The agent noted that in their professional opinion, this home either needs updating or is a fixer-upper.", name: "NEEDS_WORK", displayName: "Needs Work" } 
		,16: { id: 16, description: "We're not talking 'peek-a-boo' views here - the agent noted that this home has views that put other homes to shame.", name: "KILLER_VIEWS", displayName: "Killer Views" } 
		,32: { id: 32, description: "The agent noted that the yard of this home was larger than comparable homes in the area. Break out the BBQ!", name: "BIG_BACKYARD", displayName: "Big Backyard" } 
		,64: { id: 64, description: "A must see property.", name: "MUST_SEE_PROPERTY", displayName: "Must-See Property" } 
		,128: { id: 128, description: "The agent noted that the home had an observable level of street noise while out on tour. This could indicate a proximity to busy roads or transportation corridors that contribute to overall ambient sound.", name: "STREET_NOISE", displayName: "Street Noise" } 
	} 
}; 
var g_agentJob = { 
	AGENT: 1 
	,COORDINATOR: 2 
	,TRANSACTION_COORDINATOR: 3 
	,FIELD_AGENT: 4 
	,TEAM_LEAD: 5 
	,SEASONAL_AGENT: 6 
	,ENVOY_AGENT: 7 
	,MARKET_MANAGER: 8 
	,AREA_MANAGER: 9 
	,AGENT_IN_TRAINING: 10 
	,LEAD_FIELD_AGENT: 11 
	,TOUR_COORDINATOR: 12 
	,RAD_1: 13 
	,RAD_2: 14 
	,idToObj: { 
		1: { isCoordinatorish: false, isLeadish: false, id: 1, isAgentish: true, externalName: "Agent", name: "AGENT", isFieldish: false, abbreviation: "SrAgent", showAgentProfile: true, displayName: "Senior Agent" } 
		,2: { isCoordinatorish: true, isLeadish: false, id: 2, isAgentish: false, externalName: "Coordinator", name: "COORDINATOR", isFieldish: false, abbreviation: "Coord", showAgentProfile: false, displayName: "Coordinator" } 
		,3: { isCoordinatorish: true, isLeadish: false, id: 3, isAgentish: false, externalName: "Coordinator", name: "TRANSACTION_COORDINATOR", isFieldish: false, abbreviation: "TxCoord", showAgentProfile: false, displayName: "Transaction Coordinator" } 
		,4: { isCoordinatorish: false, isLeadish: false, id: 4, isAgentish: false, externalName: "Associate Agent", name: "FIELD_AGENT", isFieldish: true, abbreviation: "AA", showAgentProfile: false, displayName: "Associate Agent" } 
		,5: { isCoordinatorish: false, isLeadish: true, id: 5, isAgentish: true, externalName: "Agent", name: "TEAM_LEAD", isFieldish: false, abbreviation: "Lead", showAgentProfile: true, displayName: "Team Lead" } 
		,6: { isCoordinatorish: false, isLeadish: false, id: 6, isAgentish: true, externalName: "Agent", name: "SEASONAL_AGENT", isFieldish: false, abbreviation: "Season", showAgentProfile: true, displayName: "Seasonal Agent" } 
		,7: { isCoordinatorish: false, isLeadish: false, id: 7, isAgentish: true, externalName: "Agent", name: "ENVOY_AGENT", isFieldish: false, abbreviation: "Envoy", showAgentProfile: true, displayName: "Envoy Agent" } 
		,8: { isCoordinatorish: false, isLeadish: true, id: 8, isAgentish: true, externalName: "Agent", name: "MARKET_MANAGER", isFieldish: false, abbreviation: "MM", showAgentProfile: true, displayName: "Market Manager" } 
		,9: { isCoordinatorish: false, isLeadish: true, id: 9, isAgentish: true, externalName: "Agent", name: "AREA_MANAGER", isFieldish: false, abbreviation: "AM", showAgentProfile: true, displayName: "Area Manager" } 
		,10: { isCoordinatorish: false, isLeadish: false, id: 10, isAgentish: true, externalName: "Agent", name: "AGENT_IN_TRAINING", isFieldish: false, abbreviation: "Agent", showAgentProfile: true, displayName: "Agent" } 
		,11: { isCoordinatorish: false, isLeadish: false, id: 11, isAgentish: false, externalName: "Agent", name: "LEAD_FIELD_AGENT", isFieldish: true, abbreviation: "LFA", showAgentProfile: false, displayName: "Lead Field Agent" } 
		,12: { isCoordinatorish: true, isLeadish: false, id: 12, isAgentish: false, externalName: "Coordinator", name: "TOUR_COORDINATOR", isFieldish: false, abbreviation: "TrCoord", showAgentProfile: false, displayName: "Tour Coordinator" } 
		,13: { isCoordinatorish: false, isLeadish: false, id: 13, isAgentish: false, externalName: "Agent", name: "RAD_1", isFieldish: true, abbreviation: "RAD1", showAgentProfile: false, displayName: "RAD 1" } 
		,14: { isCoordinatorish: false, isLeadish: false, id: 14, isAgentish: true, externalName: "Agent", name: "RAD_2", isFieldish: false, abbreviation: "RAD2", showAgentProfile: true, displayName: "RAD 2" } 
	} 
}; 
var g_agentServiceType = { 
	NONE: 0 
	,BE_MY_AGENT: 1 
	,HOW_REDFIN_WORKS: 2 
	,HOME_BUYING: 3 
	,HOME_SELLING: 4 
	,PREAPPROVAL: 5 
	,BANK_OWNED: 6 
	,THIS_HOME: 7 
	,SMTH_ELSE: 8 
	,TOUR_HOME: 9 
	,MAKE_AN_OFFER: 10 
	,THIS_HOME_IOS: 11 
	,THIS_TOUR: 12 
	,THIS_OFFER: 13 
	,THIS_HOME_ANDROID: 14 
	,idToObj: { 
		0: { id: 0, description: "", name: "NONE", displayName: "NONE" } 
		,1: { id: 1, description: "Customer requested you as their agent.  ", name: "BE_MY_AGENT", displayName: "BE_MY_AGENT" } 
		,2: { id: 2, description: "How Redfin works.  ", name: "HOW_REDFIN_WORKS", displayName: "HOW_REDFIN_WORKS" } 
		,3: { id: 3, description: "Customer wants help with home-buying.  ", name: "HOME_BUYING", displayName: "HOME_BUYING" } 
		,4: { id: 4, description: "Customer wants help with home-selling.  ", name: "HOME_SELLING", displayName: "HOME_SELLING" } 
		,5: { id: 5, description: "Customer wants help with pre-approval.  ", name: "PREAPPROVAL", displayName: "PREAPPROVAL" } 
		,6: { id: 6, description: "Customer wants help buying a bank-owned home.  ", name: "BANK_OWNED", displayName: "BANK_OWNED" } 
		,7: { id: 7, description: "Customer wants information about a specific property.  ", name: "THIS_HOME", displayName: "THIS_HOME" } 
		,8: { id: 8, description: "Customer wants help with something else.  ", name: "SMTH_ELSE", displayName: "SMTH_ELSE" } 
		,9: { id: 9, description: "Customer wants to tour this home.  ", name: "TOUR_HOME", displayName: "TOUR_HOME" } 
		,10: { id: 10, description: "Customer wants to make an offer.  ", name: "MAKE_AN_OFFER", displayName: "MAKE_AN_OFFER" } 
		,11: { id: 11, description: "Mobile Ask a Question: Customer wants information about a specific property.  ", name: "THIS_HOME_IOS", displayName: "THIS_HOME_IOS" } 
		,12: { id: 12, description: "Customer wants information about a Tour Insight on this home.  ", name: "THIS_TOUR", displayName: "THIS_TOUR" } 
		,13: { id: 13, description: "Customer wants information about an Offer Insight on this home.  ", name: "THIS_OFFER", displayName: "THIS_OFFER" } 
		,14: { id: 14, description: "Mobile Ask a Question: Customer wants information about a specific property.  ", name: "THIS_HOME_ANDROID", displayName: "THIS_HOME_ANDROID" } 
	} 
}; 
var g_agentTypes = { 
	REDFIN: 1 
	,CONNECT: 2 
	,CONTRACT: 3 
	,idToObj: { 
		1: { id: 1, name: "REDFIN", displayName: "Redfin" } 
		,2: { id: 2, name: "CONNECT", displayName: "Partner" } 
		,3: { id: 3, name: "CONTRACT", displayName: "Contract" } 
	} 
}; 
var g_alertFrequencyType = { 
	NEVER: 1 
	,DAILY: 2 
	,INSTANT: 3 
	,DAILY_TO_INSTANT: 4 
	,idToObj: { 
		1: { legacyAbbreviation: "N", id: 1, name: "NEVER", displayName: "Never" } 
		,2: { legacyAbbreviation: "D", id: 2, name: "DAILY", displayName: "Daily" } 
		,3: { legacyAbbreviation: "I", id: 3, name: "INSTANT", displayName: "Instant" } 
		,4: { legacyAbbreviation: "I", id: 4, name: "DAILY_TO_INSTANT", displayName: "Daily to Instant" } 
	} 
}; 
var g_amenityGroupType = { 
	AMENITY_GROUP_TYPE_MARKETING_TEXT: 1 
	,AMENITY_GROUP_TYPE_SELECTED_DETAILS_PUBLIC: 2 
	,AMENITY_GROUP_TYPE_UNPROCESSED: 3 
	,AMENITY_GROUP_TYPE_OPEN_HOUSE: 4 
	,AMENITY_GROUP_TYPE_INCLUDES_REFRIGERATOR: 5 
	,AMENITY_GROUP_TYPE_INCLUDES_DISHWASHER: 6 
	,AMENITY_GROUP_TYPE_INCLUDES_DRYER: 7 
	,AMENITY_GROUP_TYPE_INCLUDES_SECURITY_SYSTEM: 8 
	,AMENITY_GROUP_TYPE_INCLUDES_STOVE_RANGE: 9 
	,AMENITY_GROUP_TYPE_INCLUDES_WASHER: 10 
	,AMENITY_GROUP_TYPE_INCLUDES_HOT_TUB: 11 
	,AMENITY_GROUP_TYPE_CONDO_COMMUNITY_NAME: 12 
	,AMENITY_GROUP_TYPE_PARKING_SPACE_NUMBER: 13 
	,AMENITY_GROUP_TYPE_STORAGE_SPACE_NUMBER: 14 
	,AMENITY_GROUP_TYPE_PARCEL_NUMBER: 15 
	,AMENITY_GROUP_TYPE_SELECTED_LINKS: 16 
	,AMENITY_GROUP_TYPE_SCHEDULING_FIELDS: 17 
	,AMENITY_GROUP_TYPE_VIRTUAL_TOUR: 33 
	,AMENITY_GROUP_TYPE_INTERIOR_FEATURES: 21 
	,AMENITY_GROUP_TYPE_PARKING_AND_GARAGE: 22 
	,AMENITY_GROUP_TYPE_EXTERIOR_FEATURES: 27 
	,AMENITY_GROUP_TYPE_MULTI_UNIT_INFO: 29 
	,AMENITY_GROUP_TYPE_HOA: 25 
	,AMENITY_GROUP_TYPE_SCHOOL_NEIGHBORHOOD: 30 
	,AMENITY_GROUP_TYPE_UTILITIES: 34 
	,AMENITY_GROUP_TYPE_TAXES_ASSESSMENTS: 28 
	,AMENITY_GROUP_TYPE_LEASE_RENTAL_DETAILS: 24 
	,AMENITY_GROUP_TYPE_FINANCING: 26 
	,AMENITY_GROUP_TYPE_PROPERTY_AND_LOT: 20 
	,AMENITY_GROUP_TYPE_LOCATION_DETAILS: 32 
	,AMENITY_GROUP_TYPE_MISC_INFO: 23 
	,AMENITY_GROUP_TYPE_DOCUMENTS_AND_DISCLOSURES: 19 
	,AMENITY_GROUP_TYPE_LISTING_INFO: 31 
	,AMENITY_GROUP_TYPE_AGENT_AND_OFFICE: 18 
	,AMENITY_GROUP_TYPE_SUBDIVISION_OR_BUILDING: 35 
	,AMENITY_GROUP_TYPE_PLAN_HOME: 36 
	,AMENITY_GROUP_TYPE_SPEC_HOME: 37 
	,idToObj: { 
		1: { id: 1, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "", name: "AMENITY_GROUP_TYPE_MARKETING_TEXT", exposeViaAmenityAdmin: true, displayName: "marketing text" } 
		,2: { id: 2, isGeneralPublic: false, order: -1, isSelectedDetails: true, description: "Group for publicly visible amenities that are broken out", name: "AMENITY_GROUP_TYPE_SELECTED_DETAILS_PUBLIC", exposeViaAmenityAdmin: true, displayName: "selected details public" } 
		,3: { id: 3, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "group that amenities are initially placed in before being processed", name: "AMENITY_GROUP_TYPE_UNPROCESSED", exposeViaAmenityAdmin: true, displayName: "Unprocessed" } 
		,4: { id: 4, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "group for open house data", name: "AMENITY_GROUP_TYPE_OPEN_HOUSE", exposeViaAmenityAdmin: false, displayName: "open house" } 
		,5: { id: 5, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "DocGen - used for figuring out if a listing has a refrigerator", name: "AMENITY_GROUP_TYPE_INCLUDES_REFRIGERATOR", exposeViaAmenityAdmin: false, displayName: "INCLUDES_REFRIGERATOR" } 
		,6: { id: 6, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "DocGen - used for figuring out if a listing has a dishwasher", name: "AMENITY_GROUP_TYPE_INCLUDES_DISHWASHER", exposeViaAmenityAdmin: false, displayName: "INCLUDES_DISHWASHER" } 
		,7: { id: 7, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "DocGen - used for figuring out if a listing has a dryer", name: "AMENITY_GROUP_TYPE_INCLUDES_DRYER", exposeViaAmenityAdmin: false, displayName: "INCLUDES_DRYER" } 
		,8: { id: 8, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "Doc Gen - used for figuring out if a listing has a security system", name: "AMENITY_GROUP_TYPE_INCLUDES_SECURITY_SYSTEM", exposeViaAmenityAdmin: false, displayName: "INCLUDES_SECURITY_SYSTEM" } 
		,9: { id: 9, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "Doc Gen - used for figuring out if a listing has a stove range", name: "AMENITY_GROUP_TYPE_INCLUDES_STOVE_RANGE", exposeViaAmenityAdmin: false, displayName: "INCLUDES_STOVE_RANGE" } 
		,10: { id: 10, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "Doc Gen - used for figuring out if a listing has a washer", name: "AMENITY_GROUP_TYPE_INCLUDES_WASHER", exposeViaAmenityAdmin: false, displayName: "INCLUDES_WASHER" } 
		,11: { id: 11, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "Doc Gen - used for figuring out if a listing has a hot tub", name: "AMENITY_GROUP_TYPE_INCLUDES_HOT_TUB", exposeViaAmenityAdmin: false, displayName: "INCLUDES_HOT_TUB" } 
		,12: { id: 12, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "Doc Gen - used for figuring out the Condo Community name", name: "AMENITY_GROUP_TYPE_CONDO_COMMUNITY_NAME", exposeViaAmenityAdmin: false, displayName: "CONDO_COMMUNITY_NAME" } 
		,13: { id: 13, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "Doc Gen - used for figuring out the number of parking spaces", name: "AMENITY_GROUP_TYPE_PARKING_SPACE_NUMBER", exposeViaAmenityAdmin: false, displayName: "PARKING_SPACE_NUMBER" } 
		,14: { id: 14, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "Doc Gen - used for figuring out the number of storage spaces", name: "AMENITY_GROUP_TYPE_STORAGE_SPACE_NUMBER", exposeViaAmenityAdmin: false, displayName: "STORAGE_SPACE_NUMBER" } 
		,15: { id: 15, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "Doc Gen - used for figuring out the parcel number of a listing", name: "AMENITY_GROUP_TYPE_PARCEL_NUMBER", exposeViaAmenityAdmin: false, displayName: "PARCEL_NUMBER" } 
		,16: { id: 16, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "group for links that we want to highlight", name: "AMENITY_GROUP_TYPE_SELECTED_LINKS", exposeViaAmenityAdmin: true, displayName: "selected links" } 
		,17: { id: 17, isGeneralPublic: false, order: -1, isSelectedDetails: false, description: "group for fields that are useful when scheduling tours", name: "AMENITY_GROUP_TYPE_SCHEDULING_FIELDS", exposeViaAmenityAdmin: true, displayName: "scheduling fields" } 
		,33: { id: 33, isGeneralPublic: true, order: 1, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_VIRTUAL_TOUR", exposeViaAmenityAdmin: true, displayName: "Virtual Tour" } 
		,21: { id: 21, isGeneralPublic: true, order: 2, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_INTERIOR_FEATURES", exposeViaAmenityAdmin: true, displayName: "Interior Features" } 
		,22: { id: 22, isGeneralPublic: true, order: 3, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_PARKING_AND_GARAGE", exposeViaAmenityAdmin: true, displayName: "Parking / Garage" } 
		,27: { id: 27, isGeneralPublic: true, order: 4, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_EXTERIOR_FEATURES", exposeViaAmenityAdmin: true, displayName: "Exterior Features" } 
		,29: { id: 29, isGeneralPublic: true, order: 5, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_MULTI_UNIT_INFO", exposeViaAmenityAdmin: true, displayName: "Multi-Unit Information" } 
		,25: { id: 25, isGeneralPublic: true, order: 6, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_HOA", exposeViaAmenityAdmin: true, displayName: "Homeowners Association" } 
		,30: { id: 30, isGeneralPublic: true, order: 7, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_SCHOOL_NEIGHBORHOOD", exposeViaAmenityAdmin: true, displayName: "School / Neighborhood" } 
		,34: { id: 34, isGeneralPublic: true, order: 8, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_UTILITIES", exposeViaAmenityAdmin: true, displayName: "Utilities" } 
		,28: { id: 28, isGeneralPublic: true, order: 9, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_TAXES_ASSESSMENTS", exposeViaAmenityAdmin: true, displayName: "Taxes / Assessments" } 
		,24: { id: 24, isGeneralPublic: true, order: 10, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_LEASE_RENTAL_DETAILS", exposeViaAmenityAdmin: true, displayName: "Lease / Rent Details" } 
		,26: { id: 26, isGeneralPublic: true, order: 11, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_FINANCING", exposeViaAmenityAdmin: true, displayName: "Financing" } 
		,20: { id: 20, isGeneralPublic: true, order: 12, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_PROPERTY_AND_LOT", exposeViaAmenityAdmin: true, displayName: "Property / Lot Details" } 
		,32: { id: 32, isGeneralPublic: true, order: 13, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_LOCATION_DETAILS", exposeViaAmenityAdmin: true, displayName: "Location Details" } 
		,23: { id: 23, isGeneralPublic: true, order: 14, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_MISC_INFO", exposeViaAmenityAdmin: true, displayName: "Misc. Information" } 
		,19: { id: 19, isGeneralPublic: true, order: 15, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_DOCUMENTS_AND_DISCLOSURES", exposeViaAmenityAdmin: true, displayName: "Documents & Disclosures" } 
		,31: { id: 31, isGeneralPublic: true, order: 16, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_LISTING_INFO", exposeViaAmenityAdmin: true, displayName: "Listing Information" } 
		,18: { id: 18, isGeneralPublic: true, order: 17, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_AGENT_AND_OFFICE", exposeViaAmenityAdmin: true, displayName: "Agent & Office Information" } 
		,35: { id: 35, isGeneralPublic: true, order: 18, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_SUBDIVISION_OR_BUILDING", exposeViaAmenityAdmin: true, displayName: "Subdivision / Building" } 
		,36: { id: 36, isGeneralPublic: true, order: 19, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_PLAN_HOME", exposeViaAmenityAdmin: true, displayName: "Plan Home Information" } 
		,37: { id: 37, isGeneralPublic: true, order: 20, isSelectedDetails: false, description: "amenity super group", name: "AMENITY_GROUP_TYPE_SPEC_HOME", exposeViaAmenityAdmin: true, displayName: "Spec. Home Information" } 
	} 
}; 
var g_apiResultCode = { 
	NO_ERROR: 0 
	,NOT_LOGGED_IN: 4 
	,OUT_OF_AREA: 10 
	,MISSING_ARGUMENT: 100 
	,INVALID_ARGUMENT: 101 
	,NOT_IMPLEMENTED: 102 
	,EMAIL_IN_USE: 102 
	,INVALID_PASSWORD: 103 
	,ERROR_SENDING_EMAIL: 104 
	,EMAIL_NOT_REGISTERED: 105 
	,SCREEN_NAME_TAKEN: 106 
	,INSUFFICIENT_PRIVILEGES: 107 
	,EMAIL_ALREADY_SENT: 108 
	,USER_ALREADY_VERIFIED: 109 
	,TOO_MANY_FAVORITES: 110 
	,NO_PUBLIC_PHONE_NUMBER: 111 
	,STALE_OBJECT: 112 
	,FAILED_CSRF_CHECK: 113 
	,WEBSERVICE_CONNECTION_FAILED: 114 
	,ALREADY_REGISTERED: 115 
	,FEATURE_DISABLED: 116 
	,PENDING_AGENT_REQUEST: 117 
	,VALIDATION_ERROR: 118 
	,SERVER_ERROR: 1000 
	,idToObj: { 
		0: { id: 0, name: "NO_ERROR", displayName: "NO_ERROR" } 
		,4: { id: 4, name: "NOT_LOGGED_IN", displayName: "NOT_LOGGED_IN" } 
		,10: { id: 10, name: "OUT_OF_AREA", displayName: "OUT_OF_AREA" } 
		,100: { id: 100, name: "MISSING_ARGUMENT", displayName: "MISSING_ARGUMENT" } 
		,101: { id: 101, name: "INVALID_ARGUMENT", displayName: "INVALID_ARGUMENT" } 
		,102: { id: 102, name: "NOT_IMPLEMENTED", displayName: "NOT_IMPLEMENTED" } 
		,102: { id: 102, name: "EMAIL_IN_USE", displayName: "EMAIL_IN_USE" } 
		,103: { id: 103, name: "INVALID_PASSWORD", displayName: "INVALID_PASSWORD" } 
		,104: { id: 104, name: "ERROR_SENDING_EMAIL", displayName: "ERROR_SENDING_EMAIL" } 
		,105: { id: 105, name: "EMAIL_NOT_REGISTERED", displayName: "EMAIL_NOT_REGISTERED" } 
		,106: { id: 106, name: "SCREEN_NAME_TAKEN", displayName: "SCREEN_NAME_TAKEN" } 
		,107: { id: 107, name: "INSUFFICIENT_PRIVILEGES", displayName: "INSUFFICIENT_PRIVILEGES" } 
		,108: { id: 108, name: "EMAIL_ALREADY_SENT", displayName: "EMAIL_ALREADY_SENT" } 
		,109: { id: 109, name: "USER_ALREADY_VERIFIED", displayName: "USER_ALREADY_VERIFIED" } 
		,110: { id: 110, name: "TOO_MANY_FAVORITES", displayName: "TOO_MANY_FAVORITES" } 
		,111: { id: 111, name: "NO_PUBLIC_PHONE_NUMBER", displayName: "NO_PUBLIC_PHONE_NUMBER" } 
		,112: { id: 112, name: "STALE_OBJECT", displayName: "STALE_OBJECT" } 
		,113: { id: 113, name: "FAILED_CSRF_CHECK", displayName: "FAILED_CSRF_CHECK" } 
		,114: { id: 114, name: "WEBSERVICE_CONNECTION_FAILED", displayName: "WEBSERVICE_CONNECTION_FAILED" } 
		,115: { id: 115, name: "ALREADY_REGISTERED", displayName: "ALREADY_REGISTERED" } 
		,116: { id: 116, name: "FEATURE_DISABLED", displayName: "FEATURE_DISABLED" } 
		,117: { id: 117, name: "PENDING_AGENT_REQUEST", displayName: "PENDING_AGENT_REQUEST" } 
		,118: { id: 118, name: "VALIDATION_ERROR", displayName: "VALIDATION_ERROR" } 
		,1000: { id: 1000, name: "SERVER_ERROR", displayName: "SERVER_ERROR" } 
	} 
}; 
var g_contactBoxActionType = { 
	TOUR: 0 
	,CONTACT: 1 
	,VERIFY_EMAIL: 2 
	,SCHEDULE_TOUR: 3 
	,SELLER_CONSULTATION: 4 
	,idToObj: { 
		0: { id: 0, name: "TOUR", displayName: "TOUR" } 
		,1: { id: 1, name: "CONTACT", displayName: "CONTACT" } 
		,2: { id: 2, name: "VERIFY_EMAIL", displayName: "VERIFY_EMAIL" } 
		,3: { id: 3, name: "SCHEDULE_TOUR", displayName: "SCHEDULE_TOUR" } 
		,4: { id: 4, name: "SELLER_CONSULTATION", displayName: "SELLER_CONSULTATION" } 
	} 
}; 
var g_contactBoxAlgorithmType = { 
	LOCAL_DEALS: 0 
	,REGION_DEALS: 1 
	,MULTIPLE_LISTINGS: 2 
	,idToObj: { 
		0: { id: 0, name: "LOCAL_DEALS", displayName: "LOCAL_DEALS" } 
		,1: { id: 1, name: "REGION_DEALS", displayName: "REGION_DEALS" } 
		,2: { id: 2, name: "MULTIPLE_LISTINGS", displayName: "MULTIPLE_LISTINGS" } 
	} 
}; 
var g_contactBoxComponentType = { 
	BUTTON: 0 
	,HTML: 1 
	,NAVIGATION: 2 
	,CALL: 3 
	,QUESTION_FORM: 4 
	,OUT_OF_AREA_FORM: 5 
	,MULTI_WINDOW: 6 
	,idToObj: { 
		0: { id: 0, name: "BUTTON", displayName: "BUTTON" } 
		,1: { id: 1, name: "HTML", displayName: "HTML" } 
		,2: { id: 2, name: "NAVIGATION", displayName: "NAVIGATION" } 
		,3: { id: 3, name: "CALL", displayName: "CALL" } 
		,4: { id: 4, name: "QUESTION_FORM", displayName: "QUESTION_FORM" } 
		,5: { id: 5, name: "OUT_OF_AREA_FORM", displayName: "OUT_OF_AREA_FORM" } 
		,6: { id: 6, name: "MULTI_WINDOW", displayName: "MULTI_WINDOW" } 
	} 
}; 
var g_contactBoxPresentationType = { 
	DETAILS_PAGE: 0 
	,MOBILE_DETAILS_PAGE: 1 
	,REGION_PAGE: 2 
	,MINIMAL: 3 
	,DETAILS_PAGE_NEW_PHOTOGRAPHY: 4 
	,idToObj: { 
		0: { id: 0, name: "DETAILS_PAGE", displayName: "DETAILS_PAGE" } 
		,1: { id: 1, name: "MOBILE_DETAILS_PAGE", displayName: "MOBILE_DETAILS_PAGE" } 
		,2: { id: 2, name: "REGION_PAGE", displayName: "REGION_PAGE" } 
		,3: { id: 3, name: "MINIMAL", displayName: "MINIMAL" } 
		,4: { id: 4, name: "DETAILS_PAGE_NEW_PHOTOGRAPHY", displayName: "DETAILS_PAGE_NEW_PHOTOGRAPHY" } 
	} 
}; 
var g_contactInfoAccessLevel = { 
	PUBLIC: 1 
	,INTERNAL: 2 
	,CLIENT_RELATIONSHIP: 3 
	,HIDDEN: 4 
	,DYNAMIC: 5 
	,idToObj: { 
		1: { id: 1, name: "PUBLIC", displayName: "Public" } 
		,2: { id: 2, name: "INTERNAL", displayName: "Redfin Employees Only" } 
		,3: { id: 3, name: "CLIENT_RELATIONSHIP", displayName: "Agents or Clients in a Relationship" } 
		,4: { id: 4, name: "HIDDEN", displayName: "Hidden" } 
		,5: { id: 5, name: "DYNAMIC", displayName: "Dynamic" } 
	} 
}; 
var g_customerActions = { 
	OFFER: 1 
	,TOUR: 2 
	,MEET: 3 
	,UNKNOWN: 4 
	,IPHONE: 5 
	,LEARN_MORE_BOUGHT_WITH: 6 
	,LEARN_MORE_SOLD_BY: 7 
	,LEARN_MORE_NEW_LISTING: 8 
	,LEARN_MORE_AGENT_INSIGHT: 9 
	,ESTIMATE: 10 
	,ASK_A_QUESTION_IOS: 11 
	,SELLER_CONSULTATION_LISTING_REQUEST: 12 
	,SELLER_CONSULTATION_CONSULT_REQUEST: 13 
	,LEARN_MORE_UPDATED_LISTING: 14 
	,TOUR_IPHONE: 15 
	,TOUR_IPAD: 16 
	,INTERNAL_REQUEST: 17 
	,BUYER_CONSULTATION_CONSULT_REQUEST: 18 
	,AGENT_REQUEST: 19 
	,AGENT_REQUEST_MOBILE_WEB: 20 
	,AGENT_REQUEST_PROFILE: 21 
	,AGENT_REQUEST_PROFILE_MOBILE_WEB: 22 
	,ASK_A_QUESTION_ANDROID: 23 
	,SELLER_CONSULTATION_CONSULT_REQUEST_IPAD: 24 
	,SELLER_CONSULTATION_CONSULT_REQUEST_IPHONE: 25 
	,SELLER_CONSULTATION_CONSULT_REQUEST_MOBILE_WEB: 26 
	,idToObj: { 
		1: { id: 1, name: "OFFER", displayName: "Offer" } 
		,2: { id: 2, name: "TOUR", displayName: "Tour" } 
		,3: { id: 3, name: "MEET", displayName: "Meet An Agent" } 
		,4: { id: 4, name: "UNKNOWN", displayName: "Unknown" } 
		,5: { id: 5, name: "IPHONE", displayName: "iPhone" } 
		,6: { id: 6, name: "LEARN_MORE_BOUGHT_WITH", displayName: "Learn More (Bought With)" } 
		,7: { id: 7, name: "LEARN_MORE_SOLD_BY", displayName: "Learn More (Sold By)" } 
		,8: { id: 8, name: "LEARN_MORE_NEW_LISTING", displayName: "Learn More (New Listing)" } 
		,9: { id: 9, name: "LEARN_MORE_AGENT_INSIGHT", displayName: "Learn More (Agent Insight)" } 
		,10: { id: 10, name: "ESTIMATE", displayName: "Create A Home Value Estimate" } 
		,11: { id: 11, name: "ASK_A_QUESTION_IOS", displayName: "Ask a Question (iOS)" } 
		,12: { id: 12, name: "SELLER_CONSULTATION_LISTING_REQUEST", displayName: "Listing request" } 
		,13: { id: 13, name: "SELLER_CONSULTATION_CONSULT_REQUEST", displayName: "Seller consultation request" } 
		,14: { id: 14, name: "LEARN_MORE_UPDATED_LISTING", displayName: "Learn More (Updated Listing)" } 
		,15: { id: 15, name: "TOUR_IPHONE", displayName: "Tour from iPhone" } 
		,16: { id: 16, name: "TOUR_IPAD", displayName: "Tour from iPad" } 
		,17: { id: 17, name: "INTERNAL_REQUEST", displayName: "Internally Generated Request" } 
		,18: { id: 18, name: "BUYER_CONSULTATION_CONSULT_REQUEST", displayName: "Buyer consultation request" } 
		,19: { id: 19, name: "AGENT_REQUEST", displayName: "Agent Request from xDP" } 
		,20: { id: 20, name: "AGENT_REQUEST_MOBILE_WEB", displayName: "Agent Request from xDP Mobile Web" } 
		,21: { id: 21, name: "AGENT_REQUEST_PROFILE", displayName: "Agent Request from Agent Profile page" } 
		,22: { id: 22, name: "AGENT_REQUEST_PROFILE_MOBILE_WEB", displayName: "Agent Request from Agent Profile page Mobile Web" } 
		,23: { id: 23, name: "ASK_A_QUESTION_ANDROID", displayName: "Ask a Question (Android)" } 
		,24: { id: 24, name: "SELLER_CONSULTATION_CONSULT_REQUEST_IPAD", displayName: "Seller consultation request iPad" } 
		,25: { id: 25, name: "SELLER_CONSULTATION_CONSULT_REQUEST_IPHONE", displayName: "Seller consultation request iPhone" } 
		,26: { id: 26, name: "SELLER_CONSULTATION_CONSULT_REQUEST_MOBILE_WEB", displayName: "Seller consultation request MobileWeb" } 
	} 
}; 
var g_customerAgentStatus = { 
	NOT_A_CUSTOMER: 1 
	,AGENT_PENDING: 2 
	,AGENT_ASSIGNED: 3 
	,PREFERRED_AGENT: 4 
	,idToObj: { 
		1: { id: 1, name: "NOT_A_CUSTOMER", displayName: "Not a Customer" } 
		,2: { id: 2, name: "AGENT_PENDING", displayName: "Agent Pending" } 
		,3: { id: 3, name: "AGENT_ASSIGNED", displayName: "Agent Assigned" } 
		,4: { id: 4, name: "PREFERRED_AGENT", displayName: "Selected, soft-assigned agent" } 
	} 
}; 
var g_dealCreationSource = { 
	UNKNOWN: 1 
	,OFFER_WIZARD: 2 
	,LISTING_WIZARD: 3 
	,SELLER_CONSULTATION_FORM: 4 
	,START_A_LISTING: 5 
	,AGENT_TOOLS_MANUAL: 6 
	,LISTING_SUBMISSION_FROM_POTENTIAL_SELLER: 7 
	,SELL_SIDE_MUTUAL: 8 
	,REPORT_A_DEAL: 9 
	,MLS_IMPORTED: 10 
	,PARTNER_CLIENT_LIST: 11 
	,PRICE_WHISPERER: 12 
	,idToObj: { 
		1: { id: 1, name: "UNKNOWN", displayName: "Unknown" } 
		,2: { id: 2, name: "OFFER_WIZARD", displayName: "Offer Wizard" } 
		,3: { id: 3, name: "LISTING_WIZARD", displayName: "Listing Wizard" } 
		,4: { id: 4, name: "SELLER_CONSULTATION_FORM", displayName: "Seller Consultation Form" } 
		,5: { id: 5, name: "START_A_LISTING", displayName: "Start a Listing" } 
		,6: { id: 6, name: "AGENT_TOOLS_MANUAL", displayName: "Agent Tools - Manual" } 
		,7: { id: 7, name: "LISTING_SUBMISSION_FROM_POTENTIAL_SELLER", displayName: "Listing Submission From Potential Seller" } 
		,8: { id: 8, name: "SELL_SIDE_MUTUAL", displayName: "Sell-side Mutual" } 
		,9: { id: 9, name: "REPORT_A_DEAL", displayName: "Report a Deal" } 
		,10: { id: 10, name: "MLS_IMPORTED", displayName: "MLS Imported" } 
		,11: { id: 11, name: "PARTNER_CLIENT_LIST", displayName: "Partner Client List" } 
		,12: { id: 12, name: "PRICE_WHISPERER", displayName: "Price Whisperer" } 
	} 
}; 
var g_dealType = { 
	BUY: 1 
	,SELL: 2 
	,SELL_MUTUAL: 3 
	,idToObj: { 
		1: { id: 1, name: "BUY", displayName: "Buy-side" } 
		,2: { id: 2, name: "SELL", displayName: "Sell-side" } 
		,3: { id: 3, name: "SELL_MUTUAL", displayName: "Sell-side Post-mutual" } 
	} 
}; 
var g_estimateStatus = { 
	NOT_SHARED: 1 
	,OPEN: 2 
	,REVIEWED: 3 
	,DELETED: 4 
	,idToObj: { 
		1: { id: 1, desc: "Not shared", name: "NOT_SHARED", displayName: "NOT_SHARED" } 
		,2: { id: 2, desc: "Open", name: "OPEN", displayName: "OPEN" } 
		,3: { id: 3, desc: "Reviewed", name: "REVIEWED", displayName: "REVIEWED" } 
		,4: { id: 4, desc: "Deleted", name: "DELETED", displayName: "DELETED" } 
	} 
}; 
var g_estimateType = { 
	BUY_SIDE: 1 
	,SELL_SIDE: 2 
	,idToObj: { 
		1: { id: 1, desc: "Estimate created to evaulate the reasonability of a listing's price", name: "BUY_SIDE", displayName: "BUY_SIDE" } 
		,2: { id: 2, desc: "Estimate created to determine a reasonable price prior to listing a home", name: "SELL_SIDE", displayName: "SELL_SIDE" } 
	} 
}; 
var g_experimentGoal = { 
	NUM_LDP_VIEWS_PER_SESSION: 1 
	,NUM_AGENT_PROFILE_VIEWS_PER_SESSION: 2 
	,VISITED_AGENT_REQUEST: 3 
	,VISITED_HOME_VALUE_TOOL: 4 
	,CONFIRMED_TOUR_REQUEST: 5 
	,idToObj: { 
		1: { id: 1, description: "Track the number of LDP views per browserId", name: "NUM_LDP_VIEWS_PER_SESSION", displayName: "NUM_LDP_VIEWS_PER_SESSION" } 
		,2: { id: 2, description: "Track the number of agent profile views per browserId", name: "NUM_AGENT_PROFILE_VIEWS_PER_SESSION", displayName: "NUM_AGENT_PROFILE_VIEWS_PER_SESSION" } 
		,3: { id: 3, description: "Tracks whether the browserId saw the agent request page", name: "VISITED_AGENT_REQUEST", displayName: "VISITED_AGENT_REQUEST" } 
		,4: { id: 4, description: "Tracks whether the browserId saw the home value tool", name: "VISITED_HOME_VALUE_TOOL", displayName: "VISITED_HOME_VALUE_TOOL" } 
		,5: { id: 5, description: "Tracks whether the browserId confirmed a tour", name: "CONFIRMED_TOUR_REQUEST", displayName: "CONFIRMED_TOUR_REQUEST" } 
	} 
}; 
var g_favoritePropertyType = { 
	NEUTRAL: 0 
	,FAVORITE: 1 
	,ANTI_FAVORITE: 2 
	,idToObj: { 
		0: { id: 0, name: "NEUTRAL", displayName: "NEUTRAL" } 
		,1: { id: 1, name: "FAVORITE", displayName: "FAVORITE" } 
		,2: { id: 2, name: "ANTI_FAVORITE", displayName: "ANTI_FAVORITE" } 
	} 
}; 
var g_favoritePropertyTypes = { 
	NEUTRAL: 0 
	,FAVORITE: 1 
	,ANTI_FAVORITE: 2 
	,idToObj: { 
		0: { id: 0, name: "NEUTRAL", displayName: "NEUTRAL" } 
		,1: { id: 1, name: "FAVORITE", displayName: "FAVORITE" } 
		,2: { id: 2, name: "ANTI_FAVORITE", displayName: "ANTI_FAVORITE" } 
	} 
}; 
var g_feature = { 
	TEST_FEATURE_1: 1 
	,TEST_FEATURE_2: 2 
	,TEST_FEATURE_3: 1505298 
	,TEST_EXPERIMENT: 8373454 
	,CB_TEST_EXPERIMENT: 8373455 
	,FACEPILE: 4125659 
	,HELP_SILO_SLIDER_JS: 3210042 
	,DESIGN_PROTO: 2434250 
	,NEW_RELIC_CONTROLLER_METHOD_NAMING: 456046 
	,PUBLIC_SQL_REPORTS: 2144421 
	,PROD_WARNING_MESSAGE: 4506548 
	,LET_IE10_BE_IE10: 8858222 
	,LET_WP_IE10_BE_IE10_BY_ANNOTATION: 6231909 
	,IE_COMPAT_ANNOTATIONS: 2917457 
	,COMMON_DIALOGS: 7345336 
	,OVERRIDE_STATIC_CONTENT: 9706258 
	,JOBS_SECTION: 6325759 
	,JOBVITE_WIDGET: 9379677 
	,ANON_LOGIN_CREATION: 461358 
	,ANON_TOURS: 4101392 
	,AFFORDABILITY_CALCULATOR: 3744443 
	,BRANDED_LISTINGS: 47194 
	,LOGIN_PAGE_RESPONSIVE_DESIGN: 4252294 
	,NEW_CONSTRUCTION_LISTINGS: 4157089 
	,CONVERTRO_TRACKING: 1581655 
	,COMSCORE_TRACKING: 3697370 
	,NEIGHBORHOOD_TO_NEIGHBORHOOD_RECOMMENDATIONS: 22 
	,PLACE_TO_NEIGHBORHOOD_RECOMMENDATIONS: 25 
	,LOCATION_AUTOCOMPLETE: 9 
	,ENABLE_CLICKABLE_GMAPS_POI_MAP_PAGE: 8704128 
	,USE_LATEST_NIGHTLY_GMAPS: 3468593 
	,USE_NEXT_VERSION_GMAPS: 6838858 
	,HTML5_STREETVIEW: 7621556 
	,MAP_STYLING: 2151682 
	,GMAPS_VISUAL_REFRESH: 584019 
	,MOBILE_SEARCH_RESULTS: 1794278 
	,LOCATION_AUTOCOMPLETE_0MS_DELAY: 9174941 
	,LDP_TWEET_BUTTON: 3 
	,LDP_SIMILARS: 4 
	,LDP_VALUE_ESTIMATES: 5 
	,LDP_TWITTER_FEED: 6 
	,LDP_MAP: 7 
	,LDP_RELEVANT_LINKS: 8 
	,LDP_COMMUNITY_SCHOOLS: 10 
	,LDP_FORUMS: 11 
	,LDP_NEIGHBORHOOD_INFO: 12 
	,LDP_PROPERTY_HISTORY: 14 
	,LDP_MORTGAGE_CALCULATOR: 15 
	,LDP_SWEET_DIGS: 16 
	,LDP_FACEBOOK_LIKE_BUTTON: 17 
	,LDP_ACTIVITY_STATS: 20 
	,NEW_LDP_PHANTOM: 8209587 
	,NEW_LDP_SUNDAYSKY: 1237561 
	,SUNDAYSKY_STAGING: 8803912 
	,NEW_LDP_ERRORCEPTION: 1020908 
	,NEW_LDP_SCHOOLS_SERVING_HOME: 9204878 
	,LDP_FACEBOOK_FEED_BUTTON: 26 
	,LDP_SELLER_AD_EXPERIMENT: 3844938 
	,LDP_COLLAPSIBLE_PANELS: 8503952 
	,LDP_PROPERY_TAX_AND_HOA_MORTGAGE_CALCULATOR: 2842326 
	,LDP_RESPONSIVE_DESIGN: 8918251 
	,LDP_HIGHER_SIMILAR_PANEL: 3355943 
	,LDP_HIGHER_SIMILAR_PANEL_V2: 6371018 
	,LDP_HIGHER_SIMILAR_PANEL_V3: 7855596 
	,LDP_HIGHER_SIMILAR_PANEL_V4: 629996 
	,SUNDAYSKY_SANDBOX: 8843818 
	,SUNDAYSKY_IOS: 9212671 
	,SUNDAYSKY_NEW_PLACARDS: 6731842 
	,LDP_VARNISH_CACHE: 3205783 
	,LDP_OFFER_INSIGHTS: 4268107 
	,LDP_OFFER_INSIGHT_MAP_MARKERS: 9484050 
	,MAP_OFFER_INSIGHTS: 2101120 
	,REGION_OFFER_INSIGHTS: 3783808 
	,PHANTOM_REGION_OFFER_INSIGHTS: 2311451 
	,STATE_PAGES: 598054 
	,OFFER_INSIGHT_PRECAL: 8968966 
	,OFFER_INSIGHT_PRECAL_JOB: 3061909 
	,REGION_EXPERIMENT: 305832 
	,EPISODES: 1074058 
	,CUSTOM_DOJO_BUILDS: 132649 
	,PREFETCH_DOJO_REQUIRES: 7849619 
	,PREFETCH_SHIM: 4468938 
	,COLLECTIONS_BETA_CURATOR: 24 
	,COLLECTIONS_BETA_CURATOR_LDP: 514055 
	,COLLECTIONS_BETA_VIEWER: 2617202 
	,COLLECTIONS_LIGHTBOX_FLIPPER: 5737510 
	,COLLECTIONS_USER_COMMENTING: 2234210 
	,COLLECTIONS_FOLLOW_COLLECTION: 5376793 
	,COLLECTIONS_FOLLOW_USER: 8411468 
	,PHANTOM_COLLECTIONS: 5433441 
	,COLLECTIONS_BETA_CURATOR_LDP_SLIDESHOW: 4594407 
	,COLLECTIONS_SHARE_COLLECTION: 7803265 
	,COLLECTIONS_SINGLE_PIN_URL: 1495205 
	,COLLECTIONS_SHARE_ON_FACEBOOK: 6089888 
	,COLLECTIONS_USE_POLAROID_AD: 3965084 
	,COLLECTIONS_USE_OMS_AD: 4973740 
	,COLLECTIONS_FEATURED_HEADER: 4973741 
	,COLLECTIONS_MAPPING_TOOLS: 1125983 
	,COLLECTIONS_JUST_MOVED_POSTCARD: 4289428 
	,COLLECTIONS_ALT_LOADING: 3610173 
	,AGENT_SURVEY_REMINDER_EMAILS: 1854302 
	,USER_NOTIFICATION_REMINDER_EMAILS: 7098289 
	,REVIEW_POST_EDIT: 2205559 
	,SERVICE_PROVIDER_PROFILE_DEDUP_TOOL: 8631759 
	,SERVICE_PROVIDER_PROFILE_SPSPLIT_TOOL: 2129896 
	,STRICT_SP_SEARCH: 6892719 
	,SPEDITOR_REDFIN_INTERNAL_NOTES: 8154759 
	,SWITCH_LINKS_TO_NEW_SP_EDITOR: 3828532 
	,SPEDITOR_ADMIN_INFO: 7736593 
	,SPEDITOR_ROTATING_AD: 1967453 
	,SPEDITOR_DEALS: 9879609 
	,SPEDITOR_RECOMMEND_SERVICE_PROVIDER: 8598005 
	,RECOMMEND_SERVICE_PROVIDER: 118506 
	,OPENBOOK_RICH_SNIPPETS: 1222661 
	,REQUEST_FACEBOOK_PUBLISH_ACTIONS_PERMISSION_FROM_NEW_USERS: 187676 
	,REQUEST_FACEBOOK_PUBLISH_ACTIONS_PERMISSION_FROM_ALL_USERS: 3400309 
	,REQUEST_FACEBOOK_PUBLISH_ACTIONS_PERMISSION_ON_ACTION_TAKEN: 187677 
	,SHARE_FAVORITES_ON_FACEBOOK: 4690510 
	,SHARE_FAVORITES_ON_FACEBOOK_SIGNUP_PAGE: 3115117 
	,FACEBOOK_OPEN_GRAPH_GEO_TAGS: 6924621 
	,AUTO_OPT_IN_TO_SHARE_FAVORITES: 4838666 
	,FACEBOOK_REFRESH_ACCESS_TOKEN_FROM_USER_MENU: 20120820 
	,EMAIL_FACEBOOK_USERS_PASSWORD: 8583353 
	,FACEBOOK_IS_HARD_LOGIN: 3416875 
	,FACEBOOK_ALLOW_LINKING_DELINKING: 1696326 
	,FACEBOOK_PUBLISH_ACTIONS_AGGRESSIVELY: 4503577 
	,FACEBOOK_FIX_RED_47276: 4503578 
	,FACEBOOK_DEAUTHORIZE_SIGNOUT_USER: 4503579 
	,GOOGLE_PLUS_SIGN_ON: 20120821 
	,GOOGLE_PLUS_AGENT_TOOLS_LOGIN: 20120824 
	,ANDROID_OVER_THE_AIR_INSTALLS: 20120823 
	,GOOGLE_PASSWORD_CHANGE_ENDPOINT: 20120825 
	,AGENT_TOOLS_LOGIN: 4304477 
	,PRICING_GAME: 8606993 
	,SAFARI_PUSH_NOTIFICATIONS: 7909920 
	,ALERTS_SETTINGS_FACELIFT: 3466839 
	,MYNA_FRAMEWORK: 212738 
	,AB_TEST_ONE_PERCENT: 8733586 
	,AB_TEST_FIVE_PERCENT: 667769 
	,AB_TEST_TEN_PERCENT: 5061758 
	,AB_TEST_TWENTY_PERCENT: 2597603 
	,AB_TEST_THIRTY_FIVE_PERCENT: 6075933 
	,AB_TEST_FIFTY_PERCENT: 129076 
	,AB_TEST_SEVENTY_FIVE_PERCENT: 3308206 
	,AB_TEST_HUNDRED_PERCENT: 2707271 
	,LISTING_ALERTS_SWITCH_ON_MAP: 3259156 
	,LISTING_ALERT_DIALOG_ON_MAP: 7576365 
	,LDP_TAGGING: 1970611 
	,STRONGMAIL: 3539965 
	,FETCHBACK_PIXEL_TRACKING: 21 
	,POST_FIRST_TOUR_PREAPPROVAL_NOTIFICATION: 4021493 
	,OPEN_HOUSE_PLANNER: 918784 
	,AGENT_INSIGHTS_ASK_A_QUESTION: 7554571 
	,TOUR_WISHLIST: 2747740 
	,HOME_COMPARATOR: 5575995 
	,UNLIMITED_DFP_TARGETING: 7960616 
	,DFP_EMAIL_WORKAROUND: 8864826 
	,STRONGMAIL_UPLOAD_STINGRAY_USER_DATA: 2043617 
	,ASK_A_QUESTION_FORM: 9093386 
	,FIFTEEN_MINUTE_AVAILABILITY: 6123888 
	,WEEKEND_OPEN_HOUSE_EMAIL: 4417951 
	,VOW_UP_UPON_REGISTRATION_REMINDER: 123126 
	,LDP_LIGHTBOX: 7345502 
	,STRONGMAIL_UPLOAD_STINGRAY_SUBSCRIBER_USER_DATA: 2043618 
	,FLEX_AVAILABILITY: 1577052 
	,SAME_DAY_TOURS_SMS: 9129884 
	,CONTACT_BOX_AVAILABILITY: 8388520 
	,HIGH_END_THRESHOLD_CONTROLS: 1194311 
	,ADD_REDFIN_EVENTS_SUBSCRIPTION: 157703 
	,EDIT_SAVED_SEARCHES: 1176370 
	,OREGON_REFUND_REMOVAL: 3946894 
	,RESPONSIVE_TOUR_CHECKOUT: 332522 
	,RESPONSIVE_AGENT_REQUEST: 5745259 
	,MIXED_AGENT_RECOMMENDATIONS: 9308684 
	,CONTACT_BOX_AGENT_SLIDE_SHOW_AB_TEST: 8333455 
	,CONTACT_BOX_HEADER_MINIMIZATION_AGENT_INTRO_EXPERIMENT: 4177588 
	,CONTACT_BOX_REGION_PAGE: 2931970 
	,CONTACT_BOX_AGENT_SLIDE_SHOW_AB_TEST_GCE: 1303688 
	,CONTACT_BOX_HEADER_MINIMIZATION_AGENT_INTRO_EXPERIMENT_GCE: 1303689 
	,CONTACT_BOX_RF_AB_TESTING_AND_GCE_AB_TESTING_EXPERIMENTS: 1303684 
	,CONTACT_BOX_AB_TESTING: 1303624 
	,PHANTOMIZE_CONTACT_BOX: 12035632 
	,CONTACT_BOX_ASK_AN_AGENT_AS_A_LINK_EXPERIMENT: 8233452 
	,CONTACT_BOX_STARS_EXPERIMENT: 8533452 
	,CONTACT_BOX_NEW_PHOTOGRAPHY_EXPERIMENT: 3347618 
	,CALL_TRACKING_TWILIO_AGENT_PROFILE_PHONE: 6091582 
	,CONTACT_BOX_CALL_TRACKING_CONTROLS: 3209909 
	,CONTACT_BOX_QUESTION_FORM_ON_SDP_EXPERIMENT: 6340680 
	,CONTACT_BOX_CTA_TEXT_ON_SDP_EXPERIMENT: 6891622 
	,CONTACT_BOX_TWILIO_PHONE: 3284084 
	,CONTACT_BOX_MINIMAL_BUTTON_TEXT_EXPERIMENT: 6357408 
	,CONNECT_MOBILE_EMAIL: 23 
	,PARTNER_RELATIONSHIP_LIST: 16561168 
	,PARTNER_AGENT_REQUEST_LIST: 560465 
	,NO_IMMEDIATE_LONG_PROJECTS: 161811 
	,ESTIMATE_V2: 5640486 
	,ESTIMATE_V2_SHARE: 654786 
	,DEAL_BONUS_SPLITS: 7815361 
	,AT_SEARCH_BUSINESS_PRI: 870089 
	,MULTI_THREADED_EMAIL_SERVICE: 4973753 
	,END_PARTNER_RELATIONSHIP_DIALOG: 465056 
	,ASSIGN_TO_AGENT_DIALOG: 406848 
	,EPOSTCARD_BLOCKED_SPAM_WORKAROUND: 3290602 
	,CONNECT_SELL_SIDE_DASHBOARD: 7122125 
	,TEST_DEAL_API_HARDENING: 2018931 
	,PARTNER_SELL_DEAL_TOOLS: 7122126 
	,PARTNER_BUY_DEAL_TOOLS: 7122127 
	,REDFIN_BUY_DEAL_V2: 7122130 
	,PUBLIC_SCOUTING_REPORT: 7122128 
	,PUBLIC_SCOUTING_REPORT_ENTRY_POINTS: 7122129 
	,LISTING_SPECIALISTS: 9534834 
	,ASSOC_AGENT_UPCOMING_ITEM_EMAIL: 456404 
	,ESTIMATE_V2_ADD_MANUAL: 123589 
	,CLOSE_TOUR_HOMEOWNER_QUESTIONS: 7316636 
	,DEALS_WITH_NULL_LISTINGS: 5743927 
	,ZENDESK_TAB: 7745972 
	,CUSTOMER_ZENDESK_TAB: 5634581 
	,ZENDESK_SSO_USE_NEW_IMPL: 4981642 
	,ZENDESK_SSO_45990_FIX: 4981643 
	,BUY_SELL_AGENT_REQUESTS: 994319 
	,AR_DETAILS_PAGE: 5661250 
	,SELLER_CONSULTATION_DIRECT_ROUTING: 8841613 
	,OFFER_INSIGHT_DATA_COLLECTION: 6812921 
	,PRICING_FIXES: 1853608 
	,ONBOARD_EXTERNAL_AGENT: 8284005 
	,REDFIN_AGENT_HELP_US_SURVEY_YOUR_CLIENTS: 9437995 
	,SHOW_ALL_PARTNER_RELATIONSHIPS: 9437996 
	,NO_SALESFORCE: 9336193 
	,AGENT_TOOLS_DEV_TAB: 5450624 
	,THREADED_CUSTOMER_NOTES: 5469748 
	,HIC_REFACTOR: 4134601 
	,AGENT_HOMEPAGE: 4844197 
	,AGENT_REMINDERS: 484675 
	,PRICE_WHISPERER: 2033332 
	,CUSTOMER_FACING_PRICE_WHISPERER: 4646455 
	,INCOMPLETE_SURVEY_FILTER: 9949172 
	,AGENT_REQUEST_OWNER: 2014796 
	,TOUR_CALENDAR_APPOINTMENT_MOBILE_LINK: 7851705 
	,PRICE_WHISPERER_LANDING_PAGE_LANGUAGE: 619148 
	,SHADOW_TOURS: 330835 
	,SHADOW_TOUR_CAL_SYNC: 330836 
	,RECOMMENDED_PARTNER_HANDOFFS: 5319580 
	,CUSTOMER_LIST_REVAMP: 468472 
	,LEGACY_CLIENTS: 145734 
	,PARTNER_CUSTOMER_LIST_REVAMP: 468473 
	,DUAL_AGENCY_PROTECTION: 4872104 
	,EFFECTIVE_AGENT_TEAM_HISTORY: 7811924 
	,FULL_LEGAL_NAME: 7654797 
	,AGENT_TOOLS_ADMIN_PAGE: 4470022 
	,LISTING_FLYER_V2: 422259 
	,BOSTON_CMA: 6810300 
	,API_FACEBOOK_LOGIN: 8146784 
	,API_ASK_AN_AGENT: 3475449 
	,LDP_REDIRECT_ALL_TO_IOS_APP: 917050 
	,LDP_REDIRECT_TO_IOS_APP: 3275066 
	,PUSH_NOTIFICATIONS: 2492719 
	,SOLDS_IN_PROXIMITY_SEARCH: 3652036 
	,MOBILE_ID_VERIFICATION: 6482560 
	,MOBILE_IOS_TOURS: 1953787 
	,MOBILE_APP_LDP_CONTACT_BOX: 713 
	,MOBILE_APP_LDP_CONTACT_BOX_TOUR_BUTTON: 4341274 
	,MOBILE_APP_LDP_NEW_SECTION_ORDER: 4758940 
	,OLD_MOBILE_APP_LDP_AGENT_AD: 7496492 
	,IOS_SMART_BANNERS_ON_DESKTOP_LDP: 7714820 
	,MOBILE_ASK_AGENT_IGNORE_LDP_CONTACT_FLAG: 3626879 
	,MOBILE_ALLOW_IOS_APP_DISABLE_FORWARDING_FROM_LDP_TO_APP: 7692139 
	,MOBILE_APP_SELLER_CONSULTATION_BOX: 7906609 
	,MOBILE_ENABLED_HEADER: 2391658 
	,MOBILE_HAMBURGER_HEADER: 8112228 
	,HOMEPAGE_PROTOTYPE: 9180422 
	,HOMEPAGE_PROTOTYPE_EXTRA_CONTENT: 3376306 
	,RESPONSIVE_HOMEPAGE: 6358050 
	,HOMEPAGE_VIDEO_RICHSNIPPET: 8983314 
	,PERSONALIZED_HOMEPAGE: 1114200 
	,OMS_ON_PERSONALIZED_HOMEPAGE: 3873672 
	,CLAIMED_HOMES_ON_HOMEPAGE: 2854625 
	,CLAIM_HOMES_FROM_HOMEPAGE: 2854626 
	,HOMEPAGE_TOUR_BUTTON: 8220382 
	,HOMEPAGE_MOBILE_AD_EXPERIMENT: 9322497 
	,LISTING_RECOMMENDATION_ON_HOMEPAGE: 9145554 
	,HOMEPAGE_SELL_MY_HOME_LINK: 4036155 
	,NEW_HOMEPAGE_EXPERIMENT: 6487230 
	,SOCIAL_PRIMARY_REGISTER_EXPERIMENT: 9739838 
	,FEWER_FIELDS_REGISTER_EXPERIMENT: 4943411 
	,SOCIAL_BUTTONS_IN_HEADER_FOOTER: 9160666 
	,HOMEPAGE_MATCHMAKER_EXPERIMENT: 8441057 
	,MOBILE_APP_DOWNLOAD: 7432007 
	,HOMEPAGE_SELL_MY_HOME_EXPERIMENT: 9820021 
	,GEOCODER_FLAG: 32456878 
	,NEIGHBORHOOD_EDITOR_NEW: 2863188 
	,LISTING_MATCHMAKER_WIDGET: 4581652 
	,LISTING_DETAILS_PAGE: 5456392 
	,MAP_PAGE: 6196468 
	,REGION_PAGE: 2779895 
	,DFP_OMS: 2779896 
	,ALLOW_FACEBOOK_AUTOLOGIN: 6195392 
	,HTML_COMPRESSION: 7171209 
	,JS_ERROR_LOGGING: 3588180 
	,idToObj: { 
		1: { id: 1, category: "Unit Tests", experimentVariants: null, description: "This isn't a real feature; it's just for unit tests.", name: "TEST_FEATURE_1", usedForTestsOnly: true, readableName: "Feature for unit tests #1", displayName: "TEST_FEATURE_1" } 
		,2: { id: 2, category: "Unit Tests", experimentVariants: null, description: "This isn't a real feature; it's just for unit tests.", name: "TEST_FEATURE_2", usedForTestsOnly: true, readableName: "Feature for unit tests #2", displayName: "TEST_FEATURE_2" } 
		,1505298: { id: 1505298, category: "Unit Tests", experimentVariants: [{"name":"Control","description":"first variant is always the control"},{"name":"foo","description":"some variant"},{"name":"bar","description":"some other variant"}], description: "This isn't a real feature; it's just for unit tests.", name: "TEST_FEATURE_3", usedForTestsOnly: true, readableName: "Feature for unit tests #3 (has experiment variants)", displayName: "TEST_FEATURE_3" } 
		,8373454: { id: 8373454, category: "Framework Testing", experimentVariants: [{"name":"Control","description":"Control Group"},{"name":"Variant_1","description":"Something is different"},{"name":"Something_else","description":"Something else is different"},{"name":"A_third_experiment","description":"Something you didn't expect"}], description: "Test architecture", name: "TEST_EXPERIMENT", usedForTestsOnly: false, readableName: "Test multivariant experiment", displayName: "TEST_EXPERIMENT" } 
		,8373455: { id: 8373455, category: "Framework Testing", experimentVariants: [{"name":"Control","description":"Go Tour This Home"},{"name":"Variant_1","description":"Go See This Home"},{"name":"Variant_2","description":"Schedule a Tour for This Home"},{"name":"Variant_3","description":"Book a Tour for This Home"}], description: "Test architecture", name: "CB_TEST_EXPERIMENT", usedForTestsOnly: false, readableName: "CB Multivariate Test Experiment ", displayName: "CB_TEST_EXPERIMENT" } 
		,4125659: { id: 4125659, category: "My Redfin", experimentVariants: null, description: "Enable Facebook Facepile on the login form", name: "FACEPILE", usedForTestsOnly: false, readableName: "Facepile", displayName: "FACEPILE" } 
		,3210042: { id: 3210042, category: "Content", experimentVariants: null, description: "Enables include for the new slider that's in place on some help pages.", name: "HELP_SILO_SLIDER_JS", usedForTestsOnly: false, readableName: "Include JS for help slider", displayName: "HELP_SILO_SLIDER_JS" } 
		,2434250: { id: 2434250, category: "Miscellaneous", experimentVariants: null, description: "Enables design team to test out site wide CSS changes", name: "DESIGN_PROTO", usedForTestsOnly: false, readableName: "Design Prototyping", displayName: "DESIGN_PROTO" } 
		,456046: { id: 456046, category: "New Relic", experimentVariants: null, description: "Change New Relic naming from the default URI naming to ControllerName#methodName symantics", name: "NEW_RELIC_CONTROLLER_METHOD_NAMING", usedForTestsOnly: false, readableName: "New Relic Controller-Method Naming", displayName: "NEW_RELIC_CONTROLLER_METHOD_NAMING" } 
		,2144421: { id: 2144421, category: "Miscellaneous", experimentVariants: null, description: "Execute SQL reports exposed to the public (for utest)", name: "PUBLIC_SQL_REPORTS", usedForTestsOnly: false, readableName: "Public SQL Reports", displayName: "PUBLIC_SQL_REPORTS" } 
		,4506548: { id: 4506548, category: "CYA", experimentVariants: null, description: "A warning system that any dev can opt into so they don't accidentally make changes to prod", name: "PROD_WARNING_MESSAGE", usedForTestsOnly: false, readableName: "Generate a warning when the user is on a prod page", displayName: "PROD_WARNING_MESSAGE" } 
		,8858222: { id: 8858222, category: "Infrastructure", experimentVariants: null, description: "IE8-9 will render in IE8 mode, but IE10 and up should be allowed to express themselves fully.", name: "LET_IE10_BE_IE10", usedForTestsOnly: false, readableName: "Let IE10+ Render in IE10+ Mode", displayName: "LET_IE10_BE_IE10" } 
		,6231909: { id: 6231909, category: "Infrastructure", experimentVariants: null, description: "When a controller is annotated as such, then Windows Phone with IE10+ (Basically WP8+) will render in IE10 mode. This only matters if the regular \"Let IE10 Be IE10\" flag is off.", name: "LET_WP_IE10_BE_IE10_BY_ANNOTATION", usedForTestsOnly: false, readableName: "Let Win Phone IE10+ Render in IE10+ Mode", displayName: "LET_WP_IE10_BE_IE10_BY_ANNOTATION" } 
		,2917457: { id: 2917457, category: "Infrastructure", experimentVariants: null, description: "Allow @IeDesktopCompatibility to control when IE is in standards mode vs compatibility mode.", name: "IE_COMPAT_ANNOTATIONS", usedForTestsOnly: false, readableName: "Enable IE compatibility annotation", displayName: "IE_COMPAT_ANNOTATIONS" } 
		,7345336: { id: 7345336, category: "Infrastructure", experimentVariants: null, description: "FixedDialog, crm/.../Dialog, common/elements/Dialog using the same strategy for display.", name: "COMMON_DIALOGS", usedForTestsOnly: false, readableName: "Common Dialogs", displayName: "COMMON_DIALOGS" } 
		,9706258: { id: 9706258, category: "Infrastructure", experimentVariants: null, description: "Allow developers to override the image server URL using cookies.", name: "OVERRIDE_STATIC_CONTENT", usedForTestsOnly: false, readableName: "Allow Static Content Overrides", displayName: "OVERRIDE_STATIC_CONTENT" } 
		,6325759: { id: 6325759, category: "Recruiting", experimentVariants: null, description: "A new jobs silo for recruiting.", name: "JOBS_SECTION", usedForTestsOnly: false, readableName: "Jobs Silo 2.0", displayName: "JOBS_SECTION" } 
		,9379677: { id: 9379677, category: "Recruiting", experimentVariants: null, description: "Enables a new API-powered list / view dojo widget that fetches data from Jobvite's API.", name: "JOBVITE_WIDGET", usedForTestsOnly: false, readableName: "Jobs Silo 2.0 - Jobvite API Integration", displayName: "JOBVITE_WIDGET" } 
		,461358: { id: 461358, category: "Anonymous Logins", experimentVariants: null, description: "Allow any anonymous logins to be created at all", name: "ANON_LOGIN_CREATION", usedForTestsOnly: false, readableName: "Anonymous Login Creation", displayName: "ANON_LOGIN_CREATION" } 
		,4101392: { id: 4101392, category: "Anonymous Logins", experimentVariants: null, description: "Allow anonymous logins to interact with the tours experience", name: "ANON_TOURS", usedForTestsOnly: false, readableName: "Anonymous Tours", displayName: "ANON_TOURS" } 
		,3744443: { id: 3744443, category: "Search: Misc", experimentVariants: null, description: "Enables the affordability calculator", name: "AFFORDABILITY_CALCULATOR", usedForTestsOnly: false, readableName: "Affordability Calculator", displayName: "AFFORDABILITY_CALCULATOR" } 
		,47194: { id: 47194, category: "Search: Misc", experimentVariants: null, description: "Highlights Redfin listings on the map, LDP and in home cards", name: "BRANDED_LISTINGS", usedForTestsOnly: false, readableName: "Branded Listings", displayName: "BRANDED_LISTINGS" } 
		,4252294: { id: 4252294, category: "Search: Misc", experimentVariants: null, description: "The Login/Signup Page and the inline login/signup popup layout will support mobile and desktop screen sizes.", name: "LOGIN_PAGE_RESPONSIVE_DESIGN", usedForTestsOnly: false, readableName: "Login Page and Popup Responsive Design", displayName: "LOGIN_PAGE_RESPONSIVE_DESIGN" } 
		,4157089: { id: 4157089, category: "Search: Misc", experimentVariants: null, description: "Show New Construction listings throughout the site including the map page, LDP, region page, mobile apps etc.", name: "NEW_CONSTRUCTION_LISTINGS", usedForTestsOnly: false, readableName: "New Construction Listings", displayName: "NEW_CONSTRUCTION_LISTINGS" } 
		,1581655: { id: 1581655, category: "Search: Analytics", experimentVariants: null, description: "Enables universal and event convertro tags", name: "CONVERTRO_TRACKING", usedForTestsOnly: false, readableName: "Convertro  Tracking", displayName: "CONVERTRO_TRACKING" } 
		,3697370: { id: 3697370, category: "Search: Analytics", experimentVariants: null, description: "Enables comscore tracking", name: "COMSCORE_TRACKING", usedForTestsOnly: false, readableName: "Comscore Tracking", displayName: "COMSCORE_TRACKING" } 
		,22: { id: 22, category: "Search: Region", experimentVariants: null, description: "'Users who liked this neighborhood also liked these other neighborhoods'", name: "NEIGHBORHOOD_TO_NEIGHBORHOOD_RECOMMENDATIONS", usedForTestsOnly: false, readableName: "Neighborhood to neighborhood recommendations", displayName: "NEIGHBORHOOD_TO_NEIGHBORHOOD_RECOMMENDATIONS" } 
		,25: { id: 25, category: "Search: Region", experimentVariants: null, description: "Most popular neighborhoods in a city", name: "PLACE_TO_NEIGHBORHOOD_RECOMMENDATIONS", usedForTestsOnly: false, readableName: "Place to neighborhood recommendations", displayName: "PLACE_TO_NEIGHBORHOOD_RECOMMENDATIONS" } 
		,9: { id: 9, category: "Search: Map", experimentVariants: null, description: "Shows an autocomplete dropdown in location search boxes.", name: "LOCATION_AUTOCOMPLETE", usedForTestsOnly: false, readableName: "Location Autocomplete", displayName: "LOCATION_AUTOCOMPLETE" } 
		,8704128: { id: 8704128, category: "Search: Map", experimentVariants: null, description: "Enable clickable map icons for points of interest on the map search page", name: "ENABLE_CLICKABLE_GMAPS_POI_MAP_PAGE", usedForTestsOnly: false, readableName: "Clickable POIs on the map page ", displayName: "ENABLE_CLICKABLE_GMAPS_POI_MAP_PAGE" } 
		,3468593: { id: 3468593, category: "Search: Map", experimentVariants: null, description: "Enable the map page to use the latest nightly version of GMaps", name: "USE_LATEST_NIGHTLY_GMAPS", usedForTestsOnly: false, readableName: "Use latest nightly GMaps", displayName: "USE_LATEST_NIGHTLY_GMAPS" } 
		,6838858: { id: 6838858, category: "Search: Map", experimentVariants: null, description: "Enable the map page to use the next version of GMaps", name: "USE_NEXT_VERSION_GMAPS", usedForTestsOnly: false, readableName: "Use the next version of GMaps", displayName: "USE_NEXT_VERSION_GMAPS" } 
		,7621556: { id: 7621556, category: "Search: Map", experimentVariants: null, description: "Enable HTML5 mode for Street view. Documented here: https://groups.google.com/forum/#!msg/google-maps-js-api-v3/FNP2INYAUpw/LurOZk0bX_EJ", name: "HTML5_STREETVIEW", usedForTestsOnly: false, readableName: "Street View HTML5 Mode", displayName: "HTML5_STREETVIEW" } 
		,2151682: { id: 2151682, category: "Search: Map", experimentVariants: null, description: "Use custom styling to get the map a Redfin experience", name: "MAP_STYLING", usedForTestsOnly: false, readableName: "Redfin Map Styling", displayName: "MAP_STYLING" } 
		,584019: { id: 584019, category: "Search: Map", experimentVariants: null, description: "Enable the visual upgrade (from May 2013) to the Google Maps UX.", name: "GMAPS_VISUAL_REFRESH", usedForTestsOnly: false, readableName: "Enable GMaps Visual Refresh", displayName: "GMAPS_VISUAL_REFRESH" } 
		,1794278: { id: 1794278, category: "Search: Map", experimentVariants: null, description: "Have the search results page provide mobile-friendly results for mobile users.", name: "MOBILE_SEARCH_RESULTS", usedForTestsOnly: false, readableName: "Enable mobile search results", displayName: "MOBILE_SEARCH_RESULTS" } 
		,9174941: { id: 9174941, category: "Search: Map", experimentVariants: null, description: "Set the delay after the user stops typing for the location autocomplete box to 0ms (down from the default of 200ms)", name: "LOCATION_AUTOCOMPLETE_0MS_DELAY", usedForTestsOnly: false, readableName: "Set Location Autocomplete AJAX Delay to 0ms", displayName: "LOCATION_AUTOCOMPLETE_0MS_DELAY" } 
		,3: { id: 3, category: "Search: LDP", experimentVariants: null, description: "Shows the tweet button on listing details pages.", name: "LDP_TWEET_BUTTON", usedForTestsOnly: false, readableName: "Tweet button", displayName: "LDP_TWEET_BUTTON" } 
		,4: { id: 4, category: "Search: LDP", experimentVariants: null, description: "Shows the similar listings and sales on listing details pages.", name: "LDP_SIMILARS", usedForTestsOnly: false, readableName: "Similars", displayName: "LDP_SIMILARS" } 
		,5: { id: 5, category: "Search: LDP", experimentVariants: null, description: "Shows the Zillow and Eppraisal on listing details pages.", name: "LDP_VALUE_ESTIMATES", usedForTestsOnly: false, readableName: "Value Estimates", displayName: "LDP_VALUE_ESTIMATES" } 
		,6: { id: 6, category: "Search: LDP", experimentVariants: null, description: "Shows the twitter feed on listing details pages.", name: "LDP_TWITTER_FEED", usedForTestsOnly: false, readableName: "Twitter Feed", displayName: "LDP_TWITTER_FEED" } 
		,7: { id: 7, category: "Search: LDP", experimentVariants: null, description: "Shows a map on listing details pages.", name: "LDP_MAP", usedForTestsOnly: false, readableName: "Map", displayName: "LDP_MAP" } 
		,8: { id: 8, category: "Search: LDP", experimentVariants: null, description: "Shows relevant links/trackbacks on listing details pages.", name: "LDP_RELEVANT_LINKS", usedForTestsOnly: false, readableName: "Relevant Links", displayName: "LDP_RELEVANT_LINKS" } 
		,10: { id: 10, category: "Search: LDP", experimentVariants: null, description: "Shows the community & school info on listing details pages.", name: "LDP_COMMUNITY_SCHOOLS", usedForTestsOnly: false, readableName: "Community & Schools", displayName: "LDP_COMMUNITY_SCHOOLS" } 
		,11: { id: 11, category: "Search: LDP", experimentVariants: null, description: "Shows the forums sidebar on listing details pages.", name: "LDP_FORUMS", usedForTestsOnly: false, readableName: "Forums", displayName: "LDP_FORUMS" } 
		,12: { id: 12, category: "Search: LDP", experimentVariants: null, description: "Shows the neighborhood info on listing details pages.", name: "LDP_NEIGHBORHOOD_INFO", usedForTestsOnly: false, readableName: "Neighborhood Info", displayName: "LDP_NEIGHBORHOOD_INFO" } 
		,14: { id: 14, category: "Search: LDP", experimentVariants: null, description: "Shows the property history on listing details pages.", name: "LDP_PROPERTY_HISTORY", usedForTestsOnly: false, readableName: "Property History", displayName: "LDP_PROPERTY_HISTORY" } 
		,15: { id: 15, category: "Search: LDP", experimentVariants: null, description: "Shows the mortgage calculator on listing details pages.", name: "LDP_MORTGAGE_CALCULATOR", usedForTestsOnly: false, readableName: "Mortgage Calculator", displayName: "LDP_MORTGAGE_CALCULATOR" } 
		,16: { id: 16, category: "Search: LDP", experimentVariants: null, description: "Shows Sweet Digs on listing details pages.", name: "LDP_SWEET_DIGS", usedForTestsOnly: false, readableName: "Sweet Digs", displayName: "LDP_SWEET_DIGS" } 
		,17: { id: 17, category: "Search: LDP", experimentVariants: null, description: "Shows the Facebook Like button (or similar button) on listing details pages.", name: "LDP_FACEBOOK_LIKE_BUTTON", usedForTestsOnly: false, readableName: "Facebook Listing Details Page Sharing", displayName: "LDP_FACEBOOK_LIKE_BUTTON" } 
		,20: { id: 20, category: "Search: LDP", experimentVariants: null, description: "Shows the activity-stats widget on the new LDP.", name: "LDP_ACTIVITY_STATS", usedForTestsOnly: false, readableName: "Activity Stats", displayName: "LDP_ACTIVITY_STATS" } 
		,8209587: { id: 8209587, category: "Search: LDP", experimentVariants: null, description: "Turns on phantom for the new LDP (off by default). Warning turning this off will result in errors being returned to Google. Alarms will go off. Use this if we are returning bad or blank data to google.", name: "NEW_LDP_PHANTOM", usedForTestsOnly: false, readableName: "Phantom New LDP", displayName: "NEW_LDP_PHANTOM" } 
		,1237561: { id: 1237561, category: "Search: LDP", experimentVariants: null, description: "Turns on sunday sky video content for the new LDP", name: "NEW_LDP_SUNDAYSKY", usedForTestsOnly: false, readableName: "Sunday Sky video", displayName: "NEW_LDP_SUNDAYSKY" } 
		,8803912: { id: 8803912, category: "Search: LDP", experimentVariants: null, description: "Flag to flip between staging or prod scripts from SundaySky", name: "SUNDAYSKY_STAGING", usedForTestsOnly: false, readableName: "Sunday Sky Staging", displayName: "SUNDAYSKY_STAGING" } 
		,1020908: { id: 1020908, category: "Search: LDP", experimentVariants: null, description: "Turns on Errorception tracking for the new LDP: http://errorception.com", name: "NEW_LDP_ERRORCEPTION", usedForTestsOnly: false, readableName: "Errorception", displayName: "NEW_LDP_ERRORCEPTION" } 
		,9204878: { id: 9204878, category: "Search: LDP", experimentVariants: null, description: "Turns on a new tab under Schools that shows schools serving the specific property", name: "NEW_LDP_SCHOOLS_SERVING_HOME", usedForTestsOnly: false, readableName: "Schools Serving this Home", displayName: "NEW_LDP_SCHOOLS_SERVING_HOME" } 
		,26: { id: 26, category: "Search: LDP", experimentVariants: null, description: "Shows the Facebook Feed button on listing details pages INSTEAD of showing the Facebook Like button.", name: "LDP_FACEBOOK_FEED_BUTTON", usedForTestsOnly: false, readableName: "Facebook Listing Details Page Feed Button", displayName: "LDP_FACEBOOK_FEED_BUTTON" } 
		,3844938: { id: 3844938, category: "Search: LDP", experimentVariants: null, description: "Experiment to simplify the call-to-action on sold pages to increase listings contacts", name: "LDP_SELLER_AD_EXPERIMENT", usedForTestsOnly: false, readableName: "Seller Ad Experiment", displayName: "LDP_SELLER_AD_EXPERIMENT" } 
		,8503952: { id: 8503952, category: "Search: LDP", experimentVariants: null, description: "Ability to collapse and expand panels on LDP", name: "LDP_COLLAPSIBLE_PANELS", usedForTestsOnly: false, readableName: "Collapsible Panels", displayName: "LDP_COLLAPSIBLE_PANELS" } 
		,2842326: { id: 2842326, category: "Search: LDP", experimentVariants: null, description: "Enhanced the mortgage calculator by adding property tax and HOA dues to the form", name: "LDP_PROPERY_TAX_AND_HOA_MORTGAGE_CALCULATOR", usedForTestsOnly: false, readableName: "Property Tax and HOA Mortgage Calculator", displayName: "LDP_PROPERY_TAX_AND_HOA_MORTGAGE_CALCULATOR" } 
		,8918251: { id: 8918251, category: "Search: LDP", experimentVariants: null, description: "LDP will adjust to a single column view for mobile browsers", name: "LDP_RESPONSIVE_DESIGN", usedForTestsOnly: false, readableName: "Responsive Design", displayName: "LDP_RESPONSIVE_DESIGN" } 
		,3355943: { id: 3355943, category: "Search: LDP", experimentVariants: [{"name":"Control_LDP","description":"No changes to the LDP"},{"name":"Higher_Nearby_Panel","description":"Extra nearby sales panel"}], description: "Add a nearby for sale panel above property details on the LDP", name: "LDP_HIGHER_SIMILAR_PANEL", usedForTestsOnly: false, readableName: "LDP Higher Similar Panel", displayName: "LDP_HIGHER_SIMILAR_PANEL" } 
		,6371018: { id: 6371018, category: "Search: LDP", experimentVariants: [{"name":"Control_LDP","description":"No changes to the LDP"},{"name":"Higher_Nearby_Panel","description":"Extra nearby sales panel"}], description: "Add a nearby for sale panel above property details for users without search cookies", name: "LDP_HIGHER_SIMILAR_PANEL_V2", usedForTestsOnly: false, readableName: "LDP Higher Similar Panel V2", displayName: "LDP_HIGHER_SIMILAR_PANEL_V2" } 
		,7855596: { id: 7855596, category: "Search: LDP", experimentVariants: [{"name":"Control_LDP","description":"No changes to the LDP"},{"name":"Higher_Nearby_Panel","description":"Extra nearby sales panel"}], description: "Add a nearby for sale panel above property details", name: "LDP_HIGHER_SIMILAR_PANEL_V3", usedForTestsOnly: false, readableName: "LDP Higher Similar Panel V3", displayName: "LDP_HIGHER_SIMILAR_PANEL_V3" } 
		,629996: { id: 629996, category: "Search: LDP", experimentVariants: [{"name":"Control_LDP","description":"No changes to the LDP"},{"name":"Higher_Nearby_Panel","description":"Extra nearby sales panel"}], description: "Add a nearby for sale panel above property details", name: "LDP_HIGHER_SIMILAR_PANEL_V4", usedForTestsOnly: false, readableName: "LDP Higher Similar Panel V4", displayName: "LDP_HIGHER_SIMILAR_PANEL_V4" } 
		,8843818: { id: 8843818, category: "Search: LDP", experimentVariants: null, description: "Videos should be generated using the SS sandbox environment", name: "SUNDAYSKY_SANDBOX", usedForTestsOnly: false, readableName: "SundaySky Sandbox", displayName: "SUNDAYSKY_SANDBOX" } 
		,9212671: { id: 9212671, category: "Search: LDP", experimentVariants: null, description: "SundaySky videos will be viewable on iOS devices", name: "SUNDAYSKY_IOS", usedForTestsOnly: false, readableName: "SundaySky on iOS", displayName: "SUNDAYSKY_IOS" } 
		,6731842: { id: 6731842, category: "Search: LDP", experimentVariants: null, description: "Invitation cards for new SundaySky player with embedded play buttons are used", name: "SUNDAYSKY_NEW_PLACARDS", usedForTestsOnly: false, readableName: "New SundaySky invitation cards", displayName: "SUNDAYSKY_NEW_PLACARDS" } 
		,3205783: { id: 3205783, category: "Search: LDP", experimentVariants: null, description: "Enables varnish cache for the LDP above the fold data", name: "LDP_VARNISH_CACHE", usedForTestsOnly: false, readableName: "LDP Varnish Cache", displayName: "LDP_VARNISH_CACHE" } 
		,4268107: { id: 4268107, category: "Search: Offer Insights", experimentVariants: null, description: "Turns on the Offer Insights for the LDP.", name: "LDP_OFFER_INSIGHTS", usedForTestsOnly: false, readableName: "LDP Offer Insights", displayName: "LDP_OFFER_INSIGHTS" } 
		,9484050: { id: 9484050, category: "Search: Offer Insights", experimentVariants: null, description: "Show returned offer insights on the overview neighborhood map. This is an admin only feature, do not turn on for the public!", name: "LDP_OFFER_INSIGHT_MAP_MARKERS", usedForTestsOnly: false, readableName: "Admin Map Markers", displayName: "LDP_OFFER_INSIGHT_MAP_MARKERS" } 
		,2101120: { id: 2101120, category: "Search: Offer Insights", experimentVariants: null, description: "Enable offer insights to be displayed on the map", name: "MAP_OFFER_INSIGHTS", usedForTestsOnly: false, readableName: "Map Offer Insights", displayName: "MAP_OFFER_INSIGHTS" } 
		,3783808: { id: 3783808, category: "Search: Offer Insights", experimentVariants: null, description: "Enable offer insights to be displayed on the region pages", name: "REGION_OFFER_INSIGHTS", usedForTestsOnly: false, readableName: "Region Offer Insights", displayName: "REGION_OFFER_INSIGHTS" } 
		,2311451: { id: 2311451, category: "Search: Offer Insights", experimentVariants: null, description: "Enable phantom for offer insights on region pages", name: "PHANTOM_REGION_OFFER_INSIGHTS", usedForTestsOnly: false, readableName: "Phantom Offer Insight Regions", displayName: "PHANTOM_REGION_OFFER_INSIGHTS" } 
		,598054: { id: 598054, category: "Search: State Pages", experimentVariants: null, description: "Enable state and national pages. This should be ALL OFF or ALL ON because it is intended for SEO and it effects the sitemap job.", name: "STATE_PAGES", usedForTestsOnly: false, readableName: "State and National Pages", displayName: "STATE_PAGES" } 
		,8968966: { id: 8968966, category: "Search: Offer Insights", experimentVariants: null, description: "When enabled, Offer Insight we use the precalculate region agg table for its data", name: "OFFER_INSIGHT_PRECAL", usedForTestsOnly: false, readableName: "Use Precalculated OI", displayName: "OFFER_INSIGHT_PRECAL" } 
		,3061909: { id: 3061909, category: "Search: Offer Insights", experimentVariants: null, description: "When enabled, the region agg data will precalculated offer insights", name: "OFFER_INSIGHT_PRECAL_JOB", usedForTestsOnly: false, readableName: "Precalculate Offer Insights in Region Agg Job", displayName: "OFFER_INSIGHT_PRECAL_JOB" } 
		,305832: { id: 305832, category: "Search: Region Map Experiment Part 3 (Redirect to list)", experimentVariants: null, description: "Bouncer for AB testing region pages. Variant Group B (Redirect to lists).", name: "REGION_EXPERIMENT", usedForTestsOnly: false, readableName: "AB Test Region Map Part 3 (Redirect to list)", displayName: "REGION_EXPERIMENT" } 
		,1074058: { id: 1074058, category: "Search: Performance", experimentVariants: null, description: "Turn on to show timing information of resource load times using Episodes by Steve Souders", name: "EPISODES", usedForTestsOnly: false, readableName: "JS Episodes Timing", displayName: "EPISODES" } 
		,132649: { id: 132649, category: "Search: Performance", experimentVariants: null, description: "Use custom dojo builds for specific browsers such as webkit etc.", name: "CUSTOM_DOJO_BUILDS", usedForTestsOnly: false, readableName: "Custom Dojo Builds", displayName: "CUSTOM_DOJO_BUILDS" } 
		,7849619: { id: 7849619, category: "Search: Performance", experimentVariants: null, description: "Add script tags for dojo requires that will be pulled down immedately once dojo loads", name: "PREFETCH_DOJO_REQUIRES", usedForTestsOnly: false, readableName: "Pretfetch Dojo Requires", displayName: "PREFETCH_DOJO_REQUIRES" } 
		,4468938: { id: 4468938, category: "Search: Performance", experimentVariants: null, description: "Run the prefetch shim for browsers that do not support link rel=prefetch", name: "PREFETCH_SHIM", usedForTestsOnly: false, readableName: "Shim link=prefetch", displayName: "PREFETCH_SHIM" } 
		,24: { id: 24, category: "Marketplaces - Collections", experimentVariants: null, description: "Let users PIN (or REPIN) photos onto collections.", name: "COLLECTIONS_BETA_CURATOR", usedForTestsOnly: false, readableName: "Collections Beta Curator", displayName: "COLLECTIONS_BETA_CURATOR" } 
		,514055: { id: 514055, category: "Marketplaces - Collections", experimentVariants: null, description: "Let users PIN (or REPIN) photos onto collections from the new LDP.", name: "COLLECTIONS_BETA_CURATOR_LDP", usedForTestsOnly: false, readableName: "Collections Beta Curator LDP", displayName: "COLLECTIONS_BETA_CURATOR_LDP" } 
		,2617202: { id: 2617202, category: "Marketplaces - Collections", experimentVariants: null, description: "Let users see collections.", name: "COLLECTIONS_BETA_VIEWER", usedForTestsOnly: false, readableName: "Collections Beta Viewer", displayName: "COLLECTIONS_BETA_VIEWER" } 
		,5737510: { id: 5737510, category: "Marketplaces - Collections", experimentVariants: null, description: "Flip between pins from within the lightbox.", name: "COLLECTIONS_LIGHTBOX_FLIPPER", usedForTestsOnly: false, readableName: "Collections Lightbox Flipper", displayName: "COLLECTIONS_LIGHTBOX_FLIPPER" } 
		,2234210: { id: 2234210, category: "Marketplaces - Collections", experimentVariants: null, description: "Let users post comments on pins.", name: "COLLECTIONS_USER_COMMENTING", usedForTestsOnly: false, readableName: "Collections User Commenting", displayName: "COLLECTIONS_USER_COMMENTING" } 
		,5376793: { id: 5376793, category: "Marketplaces - Collections", experimentVariants: null, description: "Show a button to [follow] a collection.  On each collection, show the top N people who follow it.  Also show total stats (# followers).  And send a couple types of emails: 1. 'you have a new follower!', and 2. 'here are new pins from the collections you follow'.  The emails can be turned ON/OFF by Jenkins, not by this bouncer flag.", name: "COLLECTIONS_FOLLOW_COLLECTION", usedForTestsOnly: false, readableName: "Collections - Follow a Collection", displayName: "COLLECTIONS_FOLLOW_COLLECTION" } 
		,8411468: { id: 8411468, category: "Marketplaces - Collections", experimentVariants: null, description: "Show a button to [follow] a user.  On each profile, show the top N people who follow that person.  Also show total stats (# followers).  And revise the new-follower and new-stuff-for-you emails to factor in these settings.", name: "COLLECTIONS_FOLLOW_USER", usedForTestsOnly: false, readableName: "Collections - Follow a User", displayName: "COLLECTIONS_FOLLOW_USER" } 
		,5433441: { id: 5433441, category: "Marketplaces - Collections", experimentVariants: null, description: "Encourage web crawlers, and allow all visitors, to request phantomized Collections pages.", name: "PHANTOM_COLLECTIONS", usedForTestsOnly: false, readableName: "Phantomized Collections", displayName: "PHANTOM_COLLECTIONS" } 
		,4594407: { id: 4594407, category: "Marketplaces - Collections", experimentVariants: null, description: "Participants in the collections beta will be able to pin from the LDP slideshow view", name: "COLLECTIONS_BETA_CURATOR_LDP_SLIDESHOW", usedForTestsOnly: false, readableName: "Collections LDP Slideshow Pin Button", displayName: "COLLECTIONS_BETA_CURATOR_LDP_SLIDESHOW" } 
		,7803265: { id: 7803265, category: "Marketplaces - Collections", experimentVariants: null, description: "Show a button to [share] a collection. Allows user to send email to share a Collection. Allows users to Share through Facebook and Twitter about a Collection", name: "COLLECTIONS_SHARE_COLLECTION", usedForTestsOnly: false, readableName: "Collections - Share a Collection", displayName: "COLLECTIONS_SHARE_COLLECTION" } 
		,1495205: { id: 1495205, category: "Marketplaces - Collections", experimentVariants: null, description: "When a user flips through a collection in the lightbox, update the URL in the address bar to show the URL of each pin.  And if someone goes directly to that URL, show a single-pin page.", name: "COLLECTIONS_SINGLE_PIN_URL", usedForTestsOnly: false, readableName: "Collections Single Pin URL", displayName: "COLLECTIONS_SINGLE_PIN_URL" } 
		,6089888: { id: 6089888, category: "Marketplaces - Collections", experimentVariants: null, description: "When a user creates a collection, adds a photo to a collection or follows a collection, share it to facebook.", name: "COLLECTIONS_SHARE_ON_FACEBOOK", usedForTestsOnly: false, readableName: "Share Collection Actions on Facebook", displayName: "COLLECTIONS_SHARE_ON_FACEBOOK" } 
		,3965084: { id: 3965084, category: "Marketplaces - Collections", experimentVariants: null, description: "Show the user the polaroid stack collections ad on the map page.", name: "COLLECTIONS_USE_POLAROID_AD", usedForTestsOnly: false, readableName: "Use the Polaroid Stack Ad on Map", displayName: "COLLECTIONS_USE_POLAROID_AD" } 
		,4973740: { id: 4973740, category: "Marketplaces - Collections", experimentVariants: null, description: "Use the collections oms ad on the map page.", name: "COLLECTIONS_USE_OMS_AD", usedForTestsOnly: false, readableName: "Use the Collections OMS Ad on Map", displayName: "COLLECTIONS_USE_OMS_AD" } 
		,4973741: { id: 4973741, category: "Marketplaces - Collections", experimentVariants: null, description: "Show the featured collections text on the explore page", name: "COLLECTIONS_FEATURED_HEADER", usedForTestsOnly: false, readableName: "Show the Featured Collections Text", displayName: "COLLECTIONS_FEATURED_HEADER" } 
		,1125983: { id: 1125983, category: "Marketplaces - Collections", experimentVariants: null, description: "View a collection's listings on the map", name: "COLLECTIONS_MAPPING_TOOLS", usedForTestsOnly: false, readableName: "Collections Mapping Tools", displayName: "COLLECTIONS_MAPPING_TOOLS" } 
		,4289428: { id: 4289428, category: "Marketplaces - Collections", experimentVariants: null, description: "Send out emails to clients who just closed offering a Just Moved Postcard", name: "COLLECTIONS_JUST_MOVED_POSTCARD", usedForTestsOnly: false, readableName: "Collections Just Moved Postcard", displayName: "COLLECTIONS_JUST_MOVED_POSTCARD" } 
		,3610173: { id: 3610173, category: "Marketplaces - Collections", experimentVariants: null, description: "If on, create all cards in a batch before adding any to the DOM.", name: "COLLECTIONS_ALT_LOADING", usedForTestsOnly: false, readableName: "Collections alternate card population", displayName: "COLLECTIONS_ALT_LOADING" } 
		,1854302: { id: 1854302, category: "Marketplaces - Reviews", experimentVariants: null, description: "Send out additional emails for customers who didn't fill out their agent survey", name: "AGENT_SURVEY_REMINDER_EMAILS", usedForTestsOnly: false, readableName: "10 day reminder email for agent surveys", displayName: "AGENT_SURVEY_REMINDER_EMAILS" } 
		,7098289: { id: 7098289, category: "Marketplaces - Reviews", experimentVariants: null, description: "Enables reminder emails to be sent to customers who have not acted upon their user notifications for several days", name: "USER_NOTIFICATION_REMINDER_EMAILS", usedForTestsOnly: false, readableName: "Send out reminder emails for unnoticed user notifications", displayName: "USER_NOTIFICATION_REMINDER_EMAILS" } 
		,2205559: { id: 2205559, category: "Marketplaces - Reviews", experimentVariants: [{"name":"without_edit","description":"No ability to edit reviews after they've been submitted"},{"name":"with_edit","description":"Can edit reviews shortly after submission"}], description: "Enables a post-submit edit button that allows for modifications", name: "REVIEW_POST_EDIT", usedForTestsOnly: false, readableName: "Edit survey response after submitting", displayName: "REVIEW_POST_EDIT" } 
		,8631759: { id: 8631759, category: "Marketplaces - Open Book", experimentVariants: null, description: "Tool used to merge duplicate service provider profiles", name: "SERVICE_PROVIDER_PROFILE_DEDUP_TOOL", usedForTestsOnly: false, readableName: "Service Provider Profiles Dedup Tool", displayName: "SERVICE_PROVIDER_PROFILE_DEDUP_TOOL" } 
		,2129896: { id: 2129896, category: "Marketplaces - Open Book", experimentVariants: null, description: "Tool used to split service provider profiles", name: "SERVICE_PROVIDER_PROFILE_SPSPLIT_TOOL", usedForTestsOnly: false, readableName: "Service Provider Profiles Splitter Tool", displayName: "SERVICE_PROVIDER_PROFILE_SPSPLIT_TOOL" } 
		,6892719: { id: 6892719, category: "Marketplaces - Open Book", experimentVariants: null, description: "When searching for Service Providers, only show those who (partially) match EVERY search term, instead of those who match AT LEAST ONE search term.", name: "STRICT_SP_SEARCH", usedForTestsOnly: false, readableName: "Strict Search for Service Providers", displayName: "STRICT_SP_SEARCH" } 
		,8154759: { id: 8154759, category: "Marketplaces - Open Book", experimentVariants: null, description: "Have a section on the new sp editor for redfin internal notes", name: "SPEDITOR_REDFIN_INTERNAL_NOTES", usedForTestsOnly: false, readableName: "Include Redfin Internal Notes on sp editor", displayName: "SPEDITOR_REDFIN_INTERNAL_NOTES" } 
		,3828532: { id: 3828532, category: "Marketplaces - Open Book", experimentVariants: null, description: "Change the links on the deals page and the top search box in agent tools to the new SP editor", name: "SWITCH_LINKS_TO_NEW_SP_EDITOR", usedForTestsOnly: false, readableName: "Use links to the new SP editor", displayName: "SWITCH_LINKS_TO_NEW_SP_EDITOR" } 
		,7736593: { id: 7736593, category: "Marketplaces - Open Book", experimentVariants: null, description: "Have a section on the new sp editor for admin info", name: "SPEDITOR_ADMIN_INFO", usedForTestsOnly: false, readableName: "Include Admin Info on sp editor", displayName: "SPEDITOR_ADMIN_INFO" } 
		,1967453: { id: 1967453, category: "Marketplaces - Open Book", experimentVariants: null, description: "Have a section on the new sp editor for a rotating ad", name: "SPEDITOR_ROTATING_AD", usedForTestsOnly: false, readableName: "Include a rotating ad on sp editor", displayName: "SPEDITOR_ROTATING_AD" } 
		,9879609: { id: 9879609, category: "Marketplaces - Open Book", experimentVariants: null, description: "Have a section on the new sp editor for displaying deals widget", name: "SPEDITOR_DEALS", usedForTestsOnly: false, readableName: "Include a Deals widget on sp editor", displayName: "SPEDITOR_DEALS" } 
		,8598005: { id: 8598005, category: "Marketplaces - Open Book", experimentVariants: null, description: "Have a section on the new sp editor for toggling whether this SP is your recommended SP and include personal note about this SP", name: "SPEDITOR_RECOMMEND_SERVICE_PROVIDER", usedForTestsOnly: false, readableName: "Include Recommend This Service Provider widget on sp editor", displayName: "SPEDITOR_RECOMMEND_SERVICE_PROVIDER" } 
		,118506: { id: 118506, category: "Marketplaces - Open Book", experimentVariants: null, description: "In Agent Tools, allow agents to use email template to send emails to clients about their recommended service providers.", name: "RECOMMEND_SERVICE_PROVIDER", usedForTestsOnly: false, readableName: "Recommended Service Providers in Agent Tools ", displayName: "RECOMMEND_SERVICE_PROVIDER" } 
		,1222661: { id: 1222661, category: "Marketplaces - Open Book", experimentVariants: null, description: "Show star ratings for Open Book service providers.", name: "OPENBOOK_RICH_SNIPPETS", usedForTestsOnly: false, readableName: "Open Book Rich Snippets", displayName: "OPENBOOK_RICH_SNIPPETS" } 
		,187676: { id: 187676, category: "Marketplaces - Facebook", experimentVariants: null, description: "When NEW users sign into the Redfin website with Facebook, ask them for the Open Graph permission.  We guesstimate 'new' but looking for a login cookie.  We're often wrong.", name: "REQUEST_FACEBOOK_PUBLISH_ACTIONS_PERMISSION_FROM_NEW_USERS", usedForTestsOnly: false, readableName: "Facebook - Request Publish Actions Permission from NEW Users", displayName: "REQUEST_FACEBOOK_PUBLISH_ACTIONS_PERMISSION_FROM_NEW_USERS" } 
		,3400309: { id: 3400309, category: "Marketplaces - Facebook", experimentVariants: null, description: "When ANY user signs into the Redfin website with Facebook, ask them for the Open Graph permission.", name: "REQUEST_FACEBOOK_PUBLISH_ACTIONS_PERMISSION_FROM_ALL_USERS", usedForTestsOnly: false, readableName: "Facebook - Request Publish Actions Permission from ALL Users", displayName: "REQUEST_FACEBOOK_PUBLISH_ACTIONS_PERMISSION_FROM_ALL_USERS" } 
		,187677: { id: 187677, category: "Marketplaces - Facebook", experimentVariants: null, description: "When a user favorites, or pins or follows a collection, this is where we should ask them for publish_actions permissions", name: "REQUEST_FACEBOOK_PUBLISH_ACTIONS_PERMISSION_ON_ACTION_TAKEN", usedForTestsOnly: false, readableName: "Facebook - Request Publish Actions Permission when the user takes a publishable action", displayName: "REQUEST_FACEBOOK_PUBLISH_ACTIONS_PERMISSION_ON_ACTION_TAKEN" } 
		,4690510: { id: 4690510, category: "Marketplaces - Facebook", experimentVariants: null, description: "For users who have signed into Redfin with Facebook and given us Open Graph permissions, when they tag their next favorite, prompt (1-time) to ask if they would like to have their favorites posted to Facebook, and post favorites if desired.", name: "SHARE_FAVORITES_ON_FACEBOOK", usedForTestsOnly: false, readableName: "Facebook - Share Favorites", displayName: "SHARE_FAVORITES_ON_FACEBOOK" } 
		,3115117: { id: 3115117, category: "Marketplaces - Facebook", experimentVariants: null, description: "A landing page where folks can sign up to share their favorites on Facebook.", name: "SHARE_FAVORITES_ON_FACEBOOK_SIGNUP_PAGE", usedForTestsOnly: false, readableName: "Facebook - Share Favorites Signup Page", displayName: "SHARE_FAVORITES_ON_FACEBOOK_SIGNUP_PAGE" } 
		,6924621: { id: 6924621, category: "Marketplaces - Facebook", experimentVariants: null, description: "Include extra meta tags at the top of the LDP (new and old) to capture the location of the house.", name: "FACEBOOK_OPEN_GRAPH_GEO_TAGS", usedForTestsOnly: false, readableName: "Include Facebook open graph geo tags", displayName: "FACEBOOK_OPEN_GRAPH_GEO_TAGS" } 
		,4838666: { id: 4838666, category: "Marketplaces - Facebook", experimentVariants: null, description: "If a user signs in with Facebook and grants us publish_actions permissions, then we automatically opt her into sharing favorite homes.  She can later stop sharing favorite homes with a toggle under the Favorites page.", name: "AUTO_OPT_IN_TO_SHARE_FAVORITES", usedForTestsOnly: false, readableName: "Auto opt-in for sharing favorite homes", displayName: "AUTO_OPT_IN_TO_SHARE_FAVORITES" } 
		,20120820: { id: 20120820, category: "Marketplaces - Facebook", experimentVariants: null, description: "Once per day, try to refresh the access token for FB-connected accounts via the UserMenu widget.", name: "FACEBOOK_REFRESH_ACCESS_TOKEN_FROM_USER_MENU", usedForTestsOnly: false, readableName: "Facebook: Refresh access token from UserMenu widget", displayName: "FACEBOOK_REFRESH_ACCESS_TOKEN_FROM_USER_MENU" } 
		,8583353: { id: 8583353, category: "Marketplaces - Facebook", experimentVariants: null, description: "Email a facebook user their Redfin password when they sign up with Facebook", name: "EMAIL_FACEBOOK_USERS_PASSWORD", usedForTestsOnly: false, readableName: "Email Facebook user's their password", displayName: "EMAIL_FACEBOOK_USERS_PASSWORD" } 
		,3416875: { id: 3416875, category: "Marketplaces - Facebook", experimentVariants: null, description: "Allow users who signed in with Facebook to access secure pages if they signed in on an https page", name: "FACEBOOK_IS_HARD_LOGIN", usedForTestsOnly: false, readableName: "Allow Facebook login to be hard login", displayName: "FACEBOOK_IS_HARD_LOGIN" } 
		,1696326: { id: 1696326, category: "Marketplaces - Facebook", experimentVariants: null, description: "Allow to link and delink their facebook accounts from the account settings page ", name: "FACEBOOK_ALLOW_LINKING_DELINKING", usedForTestsOnly: false, readableName: "Link and delink buttons on account settings page", displayName: "FACEBOOK_ALLOW_LINKING_DELINKING" } 
		,4503577: { id: 4503577, category: "Marketplaces - Facebook", experimentVariants: null, description: "Even if we think a user hasn't authorized our app or given us publish_actions permissions, try to puclish the actions anyways ", name: "FACEBOOK_PUBLISH_ACTIONS_AGGRESSIVELY", usedForTestsOnly: false, readableName: "Be aggressive in publishing actions to Facebook", displayName: "FACEBOOK_PUBLISH_ACTIONS_AGGRESSIVELY" } 
		,4503578: { id: 4503578, category: "Marketplaces - Facebook", experimentVariants: null, description: "We're requesting extended tokens too many times, try doing it less", name: "FACEBOOK_FIX_RED_47276", usedForTestsOnly: false, readableName: "Facebook - Try requesting extended access tokens in a different way", displayName: "FACEBOOK_FIX_RED_47276" } 
		,4503579: { id: 4503579, category: "Marketplaces - Facebook", experimentVariants: null, description: "In the deauth callback that FB calls, set the user's salts to null", name: "FACEBOOK_DEAUTHORIZE_SIGNOUT_USER", usedForTestsOnly: false, readableName: "Facebook - When a user deauthorizes our FB app, sign them out of Redfin sessions", displayName: "FACEBOOK_DEAUTHORIZE_SIGNOUT_USER" } 
		,20120821: { id: 20120821, category: "Marketplaces - Google+", experimentVariants: null, description: "Allow users to sign into Redfin with their Google+ accounts", name: "GOOGLE_PLUS_SIGN_ON", usedForTestsOnly: false, readableName: "Google Plus Sign On", displayName: "GOOGLE_PLUS_SIGN_ON" } 
		,20120824: { id: 20120824, category: "Marketplaces - Google+", experimentVariants: null, description: "Allow people to sign into agent tools using google+", name: "GOOGLE_PLUS_AGENT_TOOLS_LOGIN", usedForTestsOnly: false, readableName: "Google Plus Sign On in Agent Tools", displayName: "GOOGLE_PLUS_AGENT_TOOLS_LOGIN" } 
		,20120823: { id: 20120823, category: "Marketplaces - Google+", experimentVariants: null, description: "When a user signs in with google+, prompt them to download our android app", name: "ANDROID_OVER_THE_AIR_INSTALLS", usedForTestsOnly: false, readableName: "Over the air installs for Android app", displayName: "ANDROID_OVER_THE_AIR_INSTALLS" } 
		,20120825: { id: 20120825, category: "Marketplaces - Google+", experimentVariants: null, description: "A password filter will call this endpoint when a Redfin employee changes their Google password", name: "GOOGLE_PASSWORD_CHANGE_ENDPOINT", usedForTestsOnly: false, readableName: "Allow use of endpoint to logout Redfin Google users", displayName: "GOOGLE_PASSWORD_CHANGE_ENDPOINT" } 
		,4304477: { id: 4304477, category: "Marketplaces - Other Stuff", experimentVariants: null, description: "Use the agent tools login for agent tools urls", name: "AGENT_TOOLS_LOGIN", usedForTestsOnly: false, readableName: "Redirect to agent tools login", displayName: "AGENT_TOOLS_LOGIN" } 
		,8606993: { id: 8606993, category: "Marketplaces - Other Stuff", experimentVariants: null, description: "On the LDP, allow users to guess the eventual sale price of the home.  When the home sells, send emails to notify all participants and declare the winner.", name: "PRICING_GAME", usedForTestsOnly: false, readableName: "The Pricing Game", displayName: "PRICING_GAME" } 
		,7909920: { id: 7909920, category: "Marketplaces - Other Stuff", experimentVariants: null, description: "In OSX Mavericks allow people to sign up for Safari push notifications", name: "SAFARI_PUSH_NOTIFICATIONS", usedForTestsOnly: false, readableName: "Browser push notifications on Safari", displayName: "SAFARI_PUSH_NOTIFICATIONS" } 
		,3466839: { id: 3466839, category: "Marketplaces - Other Stuff", experimentVariants: null, description: "To support modifying push and email alerts settings", name: "ALERTS_SETTINGS_FACELIFT", usedForTestsOnly: false, readableName: "Changing the layout of the Alerts Settings page.", displayName: "ALERTS_SETTINGS_FACELIFT" } 
		,212738: { id: 212738, category: "Marketplaces - Myna AB Testing", experimentVariants: null, description: "Allows the use of Myna for A/B Testing", name: "MYNA_FRAMEWORK", usedForTestsOnly: false, readableName: "Myna AB Test Framework", displayName: "MYNA_FRAMEWORK" } 
		,8733586: { id: 8733586, category: "Marketplaces - Myna AB Testing", experimentVariants: null, description: "Allows 1% of all traffic to use A/B Testing", name: "AB_TEST_ONE_PERCENT", usedForTestsOnly: false, readableName: "AB Test 1%", displayName: "AB_TEST_ONE_PERCENT" } 
		,667769: { id: 667769, category: "Marketplaces - Myna AB Testing", experimentVariants: null, description: "Allows 5% of all traffic to use A/B Testing", name: "AB_TEST_FIVE_PERCENT", usedForTestsOnly: false, readableName: "AB Test 5%", displayName: "AB_TEST_FIVE_PERCENT" } 
		,5061758: { id: 5061758, category: "Marketplaces - Myna AB Testing", experimentVariants: null, description: "Allows 10% of all traffic to use A/B Testing", name: "AB_TEST_TEN_PERCENT", usedForTestsOnly: false, readableName: "AB Test 10%", displayName: "AB_TEST_TEN_PERCENT" } 
		,2597603: { id: 2597603, category: "Marketplaces - Myna AB Testing", experimentVariants: null, description: "Allows 20% of all traffic to use A/B Testing", name: "AB_TEST_TWENTY_PERCENT", usedForTestsOnly: false, readableName: "AB Test 20%", displayName: "AB_TEST_TWENTY_PERCENT" } 
		,6075933: { id: 6075933, category: "Marketplaces - Myna AB Testing", experimentVariants: null, description: "Allows 35% of all traffic to use A/B Testing", name: "AB_TEST_THIRTY_FIVE_PERCENT", usedForTestsOnly: false, readableName: "AB Test 35%", displayName: "AB_TEST_THIRTY_FIVE_PERCENT" } 
		,129076: { id: 129076, category: "Marketplaces - Myna AB Testing", experimentVariants: null, description: "Allows 50% of all traffic to use A/B Testing", name: "AB_TEST_FIFTY_PERCENT", usedForTestsOnly: false, readableName: "AB Test 50%", displayName: "AB_TEST_FIFTY_PERCENT" } 
		,3308206: { id: 3308206, category: "Marketplaces - Myna AB Testing", experimentVariants: null, description: "Allows 75% of all traffic to use A/B Testing", name: "AB_TEST_SEVENTY_FIVE_PERCENT", usedForTestsOnly: false, readableName: "AB Test 75%", displayName: "AB_TEST_SEVENTY_FIVE_PERCENT" } 
		,2707271: { id: 2707271, category: "Marketplaces - Myna AB Testing", experimentVariants: null, description: "Allows 100% of all traffic to use A/B Testing", name: "AB_TEST_HUNDRED_PERCENT", usedForTestsOnly: false, readableName: "AB Test 100%", displayName: "AB_TEST_HUNDRED_PERCENT" } 
		,3259156: { id: 3259156, category: "Marketplaces - Other Stuff", experimentVariants: null, description: "Changes the listing alerts button on the map page to a one click toggle switch", name: "LISTING_ALERTS_SWITCH_ON_MAP", usedForTestsOnly: false, readableName: "Listing alerts switch on map", displayName: "LISTING_ALERTS_SWITCH_ON_MAP" } 
		,7576365: { id: 7576365, category: "Marketplaces - Other Stuff", experimentVariants: null, description: "Turns on a popup on the map page that sometimes appears to prompt people to create an instant update", name: "LISTING_ALERT_DIALOG_ON_MAP", usedForTestsOnly: false, readableName: "Listing alert dialog on map", displayName: "LISTING_ALERT_DIALOG_ON_MAP" } 
		,1970611: { id: 1970611, category: "Marketplaces - Other Stuff", experimentVariants: null, description: "Add a tagging cookie to LDP pages for analytics", name: "LDP_TAGGING", usedForTestsOnly: false, readableName: "LDP Tagging", displayName: "LDP_TAGGING" } 
		,3539965: { id: 3539965, category: "CE: Alerts & Emails", experimentVariants: null, description: "Enable StrongMail and disable WhatCounts", name: "STRONGMAIL", usedForTestsOnly: false, readableName: "StrongMail", displayName: "STRONGMAIL" } 
		,21: { id: 21, category: "CE: Tracking", experimentVariants: null, description: "3rd party tracking pixels in the global footer. Turning this feature off on the homepage requires flushing the Cotendo cache.", name: "FETCHBACK_PIXEL_TRACKING", usedForTestsOnly: false, readableName: "Fetchback Pixel Tracking", displayName: "FETCHBACK_PIXEL_TRACKING" } 
		,4021493: { id: 4021493, category: "CE: Touring", experimentVariants: null, description: "Notifies the user to upload their preapproval if they do not have one yet.", name: "POST_FIRST_TOUR_PREAPPROVAL_NOTIFICATION", usedForTestsOnly: false, readableName: "Post first tour preapproval notification", displayName: "POST_FIRST_TOUR_PREAPPROVAL_NOTIFICATION" } 
		,918784: { id: 918784, category: "CE: Touring", experimentVariants: null, description: "Helen Weng's intern project", name: "OPEN_HOUSE_PLANNER", usedForTestsOnly: false, readableName: "Open house planner", displayName: "OPEN_HOUSE_PLANNER" } 
		,7554571: { id: 7554571, category: "CE: Contact", experimentVariants: null, description: "Displays the 'Ask a Question' link for Redfin Agents who have left Agent Insights.", name: "AGENT_INSIGHTS_ASK_A_QUESTION", usedForTestsOnly: false, readableName: "'Ask a Question' for Agent Insights on the New LDP", displayName: "AGENT_INSIGHTS_ASK_A_QUESTION" } 
		,2747740: { id: 2747740, category: "CE: Touring", experimentVariants: null, description: "Tour wishlist project", name: "TOUR_WISHLIST", usedForTestsOnly: false, readableName: "Tour wishlist", displayName: "TOUR_WISHLIST" } 
		,5575995: { id: 5575995, category: "CE: Home Comparator", experimentVariants: null, description: "Compares selected favorites in a tabular form", name: "HOME_COMPARATOR", usedForTestsOnly: false, readableName: "Home Comparator", displayName: "HOME_COMPARATOR" } 
		,7960616: { id: 7960616, category: "Commerce/CE: DFP Email", experimentVariants: null, description: "Use the free-form custom targeting to allow more service regions to be targetted instead of the standard 200 key-value pairs.", name: "UNLIMITED_DFP_TARGETING", usedForTestsOnly: false, readableName: "Unlimited DFP Targeting", displayName: "UNLIMITED_DFP_TARGETING" } 
		,8864826: { id: 8864826, category: "Commerce/CE: DFP Email", experimentVariants: null, description: "Custom DFP rotation using random number generator. Retrieve image and url using DFP API. Will record impressions, but not click-through. See bug 117060.", name: "DFP_EMAIL_WORKAROUND", usedForTestsOnly: false, readableName: "DFP Email Workaround", displayName: "DFP_EMAIL_WORKAROUND" } 
		,2043617: { id: 2043617, category: "CE: Strongmail Upload Stingray User Data", experimentVariants: null, description: "Enables the synchronization of additional user data of subscribers to the data sources in Strongmail as part of the StrongmailFull datamover job.", name: "STRONGMAIL_UPLOAD_STINGRAY_USER_DATA", usedForTestsOnly: false, readableName: "Strongmail Upload Stingray User Data", displayName: "STRONGMAIL_UPLOAD_STINGRAY_USER_DATA" } 
		,9093386: { id: 9093386, category: "CE: Contact", experimentVariants: null, description: "New Buy Box Ask a Question form displaying a text area for users to write a question to the agent from the new LDP. New Buy Box must be enabled.", name: "ASK_A_QUESTION_FORM", usedForTestsOnly: false, readableName: "Ask a Question Form for New Buy Box", displayName: "ASK_A_QUESTION_FORM" } 
		,6123888: { id: 6123888, category: "CE: Touring", experimentVariants: null, description: "Allow agent availability, tour and deal appointments to have 15-minute intervals instead of 30.", name: "FIFTEEN_MINUTE_AVAILABILITY", usedForTestsOnly: false, readableName: "15-Minute Availability", displayName: "FIFTEEN_MINUTE_AVAILABILITY" } 
		,4417951: { id: 4417951, category: "CE: Touring", experimentVariants: null, description: "Send an email before the weekend to users that have open houses in their favorites and saved searches for the upcoming weekend.", name: "WEEKEND_OPEN_HOUSE_EMAIL", usedForTestsOnly: false, readableName: "Weekend Open House Email", displayName: "WEEKEND_OPEN_HOUSE_EMAIL" } 
		,123126: { id: 123126, category: "CE: Reminders", experimentVariants: null, description: "A reminder for the user to VOW up after they have successfully created their account", name: "VOW_UP_UPON_REGISTRATION_REMINDER", usedForTestsOnly: false, readableName: "VOW Up Reminder for New Users", displayName: "VOW_UP_UPON_REGISTRATION_REMINDER" } 
		,7345502: { id: 7345502, category: "CE: Contact", experimentVariants: null, description: "Show the LDP Registration Lightbox on the LDP", name: "LDP_LIGHTBOX", usedForTestsOnly: false, readableName: "LDP Registration Lightbox", displayName: "LDP_LIGHTBOX" } 
		,2043618: { id: 2043618, category: "CE: Strongmail Upload Stingray Subscriber User Data", experimentVariants: null, description: "Enables the synchronization of user and subscriber data combined of subscribers to the data sources in Strongmail as part of the StrongmailFull datamover job.", name: "STRONGMAIL_UPLOAD_STINGRAY_SUBSCRIBER_USER_DATA", usedForTestsOnly: false, readableName: "Strongmail Upload Stingray Subscriber User Data", displayName: "STRONGMAIL_UPLOAD_STINGRAY_SUBSCRIBER_USER_DATA" } 
		,1577052: { id: 1577052, category: "CE: Touring", experimentVariants: null, description: "Enable Agents to specify location-specific free time blocks for their availability", name: "FLEX_AVAILABILITY", usedForTestsOnly: false, readableName: "Flexible Availability", displayName: "FLEX_AVAILABILITY" } 
		,9129884: { id: 9129884, category: "CE: Touring", experimentVariants: null, description: "Enable Agents to receive SMS from us to schedule same day tours", name: "SAME_DAY_TOURS_SMS", usedForTestsOnly: false, readableName: "Same Day Tours SMS", displayName: "SAME_DAY_TOURS_SMS" } 
		,8388520: { id: 8388520, category: "CE: Touring", experimentVariants: null, description: "Restricts the display and ordering of agents in the contact box based on their availability", name: "CONTACT_BOX_AVAILABILITY", usedForTestsOnly: false, readableName: "Contact Box Availability", displayName: "CONTACT_BOX_AVAILABILITY" } 
		,1194311: { id: 1194311, category: "CE: Touring", experimentVariants: null, description: "Restricts the visibility of the High-End Threshold on both the Service Region Editor and the Agent Profile Editor.", name: "HIGH_END_THRESHOLD_CONTROLS", usedForTestsOnly: false, readableName: "High-End Threshold Controls", displayName: "HIGH_END_THRESHOLD_CONTROLS" } 
		,157703: { id: 157703, category: "CE: Redfin Events", experimentVariants: null, description: "Addition of new Redfin Events subscription to our e-mail subscriptions, along with getting rid of the checkbox to subscribe to Redfin News on all registration forms. New users will be automatically subscribed to Redfin News and Redfin Events.", name: "ADD_REDFIN_EVENTS_SUBSCRIPTION", usedForTestsOnly: false, readableName: "Add New Redfin Events Subscription", displayName: "ADD_REDFIN_EVENTS_SUBSCRIPTION" } 
		,1176370: { id: 1176370, category: "CE: Saved Searches", experimentVariants: null, description: "The ability to edit saved search parameters in /myredfin/saved-searches.", name: "EDIT_SAVED_SEARCHES", usedForTestsOnly: false, readableName: "Edit Saved Searches", displayName: "EDIT_SAVED_SEARCHES" } 
		,3946894: { id: 3946894, category: "CE: Oregon Refund", experimentVariants: null, description: "Use this flag to remove the Oregon Refund from the site. If it's turned 'on' then the refund will disappear from the site", name: "OREGON_REFUND_REMOVAL", usedForTestsOnly: false, readableName: "Remove Oregon Refund from Redfin.com", displayName: "OREGON_REFUND_REMOVAL" } 
		,332522: { id: 332522, category: "CE: Touring", experimentVariants: null, description: "Support for tour checkout on mobile devices", name: "RESPONSIVE_TOUR_CHECKOUT", usedForTestsOnly: false, readableName: "Responsive Design for Tour Checkout", displayName: "RESPONSIVE_TOUR_CHECKOUT" } 
		,5745259: { id: 5745259, category: "CE: Contact", experimentVariants: null, description: "Support for agent request on mobile devices", name: "RESPONSIVE_AGENT_REQUEST", usedForTestsOnly: false, readableName: "Responsive Design for Agent Request Page", displayName: "RESPONSIVE_AGENT_REQUEST" } 
		,9308684: { id: 9308684, category: "CE: Contact", experimentVariants: null, description: "Use this flag to enable sell-side agents at the end of the buy-side Contact Box and vice versa.", name: "MIXED_AGENT_RECOMMENDATIONS", usedForTestsOnly: false, readableName: "Mixed Agent Recommendations", displayName: "MIXED_AGENT_RECOMMENDATIONS" } 
		,8333455: { id: 8333455, category: "CE: LDP Contact Box AB Testing", experimentVariants: [{"name":"Control","description":"Control"},{"name":"Rotating_Contact_Box","description":"Auto-rotating Multi-agent Contact Box"}], description: "The agent box automatically rotates through multiple agents if they are there", name: "CONTACT_BOX_AGENT_SLIDE_SHOW_AB_TEST", usedForTestsOnly: false, readableName: "REF: Auto-rotating Multi-agent Contact Box", displayName: "CONTACT_BOX_AGENT_SLIDE_SHOW_AB_TEST" } 
		,4177588: { id: 4177588, category: "CE: LDP Contact Box AB Testing", experimentVariants: [{"name":"Control","description":"Control"},{"name":"Minimized_Header_Contact_Box","description":"Header Minimization + Agent Introduction Text"}], description: "To try putting the agent at the very top of the page and adding text to introduce the agent to clarify that they are a buyer's agent and not a listing agent.", name: "CONTACT_BOX_HEADER_MINIMIZATION_AGENT_INTRO_EXPERIMENT", usedForTestsOnly: false, readableName: "REF: Header Minimization", displayName: "CONTACT_BOX_HEADER_MINIMIZATION_AGENT_INTRO_EXPERIMENT" } 
		,2931970: { id: 2931970, category: "CE: Contact Box", experimentVariants: null, description: "New contact box on region pages", name: "CONTACT_BOX_REGION_PAGE", usedForTestsOnly: false, readableName: "Contact Box Region Page", displayName: "CONTACT_BOX_REGION_PAGE" } 
		,1303688: { id: 1303688, category: "CE: LDP Contact Box AB Testing", experimentVariants: null, description: "The agent box automatically rotates through multiple agents if they are there", name: "CONTACT_BOX_AGENT_SLIDE_SHOW_AB_TEST_GCE", usedForTestsOnly: false, readableName: "GCE: Auto-rotating Multi-agent Contact Box", displayName: "CONTACT_BOX_AGENT_SLIDE_SHOW_AB_TEST_GCE" } 
		,1303689: { id: 1303689, category: "CE: LDP Contact Box AB Testing", experimentVariants: null, description: "To try putting the agent at the very top of the page.", name: "CONTACT_BOX_HEADER_MINIMIZATION_AGENT_INTRO_EXPERIMENT_GCE", usedForTestsOnly: false, readableName: "GCE: Header Minimization", displayName: "CONTACT_BOX_HEADER_MINIMIZATION_AGENT_INTRO_EXPERIMENT_GCE" } 
		,1303684: { id: 1303684, category: "CE: LDP Contact Box AB Testing", experimentVariants: [{"name":"Redfin_AB","description":"Redfin Experiment Framework"},{"name":"GCE_AB","description":"Google Content Experiment"}], description: "This feature is used to split traffic between two A/B Testing Frameworks running the experiment. Give each variant 50% for an even split.", name: "CONTACT_BOX_RF_AB_TESTING_AND_GCE_AB_TESTING_EXPERIMENTS", usedForTestsOnly: false, readableName: "Contact Box Redfin A/B Testing and GCE A/B Testing Experiments", displayName: "CONTACT_BOX_RF_AB_TESTING_AND_GCE_AB_TESTING_EXPERIMENTS" } 
		,1303624: { id: 1303624, category: "CE: LDP Contact Box AB Testing", experimentVariants: null, description: "This feature is used as a kill switch to turn off ALL A/B testing on the Contact Box", name: "CONTACT_BOX_AB_TESTING", usedForTestsOnly: false, readableName: "Contact Box A/B Testing", displayName: "CONTACT_BOX_AB_TESTING" } 
		,12035632: { id: 12035632, category: "CE: Contact Box", experimentVariants: null, description: "Includes a data loader endpoint call to PropertyDetailsModelPopulator.getPreloadedData() to pull ContactBox data in so that ContactBox in phantom land is rendered properly.", name: "PHANTOMIZE_CONTACT_BOX", usedForTestsOnly: false, readableName: "Phantomized Contact Box", displayName: "PHANTOMIZE_CONTACT_BOX" } 
		,8233452: { id: 8233452, category: "CE: LDP Contact Box AB Testing", experimentVariants: [{"name":"Control","description":"Control"},{"name":"Ask_An_Agent_As_A_Link","description":"Ask An Agent Question form is now a link and grouped next to the 'Start An Offer' link."}], description: "This removes the Ask a Question text box and replaces it with a link, which is grouped with the tour button and offer link.", name: "CONTACT_BOX_ASK_AN_AGENT_AS_A_LINK_EXPERIMENT", usedForTestsOnly: false, readableName: "REF: Ask A Question as a Link", displayName: "CONTACT_BOX_ASK_AN_AGENT_AS_A_LINK_EXPERIMENT" } 
		,8533452: { id: 8533452, category: "CE: LDP Contact Box AB Testing", experimentVariants: [{"name":"Control","description":"Control"},{"name":"Just_Recently_Closed_Deals","description":"Just recently closed deals"},{"name":"Just_Stars","description":"Just star ratings"}], description: "This experiment measure whether just display stars, just displaying reviews, or displaying both in the agent card can affect conversion rates.", name: "CONTACT_BOX_STARS_EXPERIMENT", usedForTestsOnly: false, readableName: "REF: Stars vs. Local Deals vs. Rotating b/w the Two", displayName: "CONTACT_BOX_STARS_EXPERIMENT" } 
		,3347618: { id: 3347618, category: "CE: LDP Contact Box AB Testing", experimentVariants: [{"name":"Control","description":"Control"},{"name":"New_Photography","description":"New photography"}], description: "Update the contact box on the LDP with new photography and assets from Iga. Only in Seattle. Only for recommendations that exclusively have Redfin agents.", name: "CONTACT_BOX_NEW_PHOTOGRAPHY_EXPERIMENT", usedForTestsOnly: false, readableName: "REF: Contact Box Photography Experiment", displayName: "CONTACT_BOX_NEW_PHOTOGRAPHY_EXPERIMENT" } 
		,6091582: { id: 6091582, category: "CE: CallTracking", experimentVariants: null, description: "Display agent's Twilio number on Agent Profile and in Agent Tools. Buy a twilio number on Edit Agent Profile Save (includes Agent onboarding) if none.", name: "CALL_TRACKING_TWILIO_AGENT_PROFILE_PHONE", usedForTestsOnly: false, readableName: "Call Tracking V1: Twilio Agent Profile Phone", displayName: "CALL_TRACKING_TWILIO_AGENT_PROFILE_PHONE" } 
		,3209909: { id: 3209909, category: "CE: CallTracking", experimentVariants: null, description: "Display controls in the Agent Profile Editor for displaying a number in the Contact Box, and configuring Inbound Agents", name: "CONTACT_BOX_CALL_TRACKING_CONTROLS", usedForTestsOnly: false, readableName: "Call Tracking: Contact Box (Controls)", displayName: "CONTACT_BOX_CALL_TRACKING_CONTROLS" } 
		,6340680: { id: 6340680, category: "CE: SDP Contact Box AB Testing", experimentVariants: [{"name":"Control","description":"Control"},{"name":"Question_Form_On_SDP","description":"Question Form on SDP"}], description: "Add the ask a question in-line form to the SDP contact box. CTA text remains the same and links to the seller consultation form.", name: "CONTACT_BOX_QUESTION_FORM_ON_SDP_EXPERIMENT", usedForTestsOnly: false, readableName: "REF: Question Form on SDP Experiment", displayName: "CONTACT_BOX_QUESTION_FORM_ON_SDP_EXPERIMENT" } 
		,6891622: { id: 6891622, category: "CE: SDP Contact Box AB Testing", experimentVariants: [{"name":"Control","description":"Control"},{"name":"Learn_About_Selling","description":"Learn About Selling with"},{"name":"Sell_Your_Home_With","description":"Sell Your Home with"}], description: "Change the CTA text to: 1. Talk to [agent.firstname] About Selling (control), 2. Learning about Selling with [agent.firstname], and 3. Sell Your Home with [agent.firstname].", name: "CONTACT_BOX_CTA_TEXT_ON_SDP_EXPERIMENT", usedForTestsOnly: false, readableName: "REF: Call to Action Text on SDP Experiment", displayName: "CONTACT_BOX_CTA_TEXT_ON_SDP_EXPERIMENT" } 
		,3284084: { id: 3284084, category: "CE: CallTracking", experimentVariants: null, description: "Displays an agent's Contact Box Twilio Phone in their contact box", name: "CONTACT_BOX_TWILIO_PHONE", usedForTestsOnly: false, readableName: "Call Tracking: Twilio Phone in Contact Box", displayName: "CONTACT_BOX_TWILIO_PHONE" } 
		,6357408: { id: 6357408, category: "CE: Minimal Contact Box", experimentVariants: [{"name":"Control","description":"Control"},{"name":"Ask_Name_For_Recommendations","description":"Ask Name For Recommendations"},{"name":"Get_More_Recommendations","description":"Get More Recommendations"}], description: "Test three button text variants for the minimal contact box: 'Ask [first name]' (control), 'Ask [first name] for Recommendations', and 'Get More Recommendations'.", name: "CONTACT_BOX_MINIMAL_BUTTON_TEXT_EXPERIMENT", usedForTestsOnly: false, readableName: "Minimal Contact Box Button Text", displayName: "CONTACT_BOX_MINIMAL_BUTTON_TEXT_EXPERIMENT" } 
		,23: { id: 23, category: "Commerce: Connect", experimentVariants: null, description: "Allows connect agents to claim leads more easily on mobile devices", name: "CONNECT_MOBILE_EMAIL", usedForTestsOnly: false, readableName: "Connect Mobile Email", displayName: "CONNECT_MOBILE_EMAIL" } 
		,16561168: { id: 16561168, category: "Commerce: Connect", experimentVariants: null, description: "Show the partner relationships list for partner team admins", name: "PARTNER_RELATIONSHIP_LIST", usedForTestsOnly: false, readableName: "Partner Relationship List", displayName: "PARTNER_RELATIONSHIP_LIST" } 
		,560465: { id: 560465, category: "Commerce: Connect", experimentVariants: null, description: "Show the partner agent request list for partner team admins", name: "PARTNER_AGENT_REQUEST_LIST", usedForTestsOnly: false, readableName: "Partner Agent Request List", displayName: "PARTNER_AGENT_REQUEST_LIST" } 
		,161811: { id: 161811, category: "Commerce: Connect", experimentVariants: null, description: "Partner agent must wait 14 days before marking a customer as a long project", name: "NO_IMMEDIATE_LONG_PROJECTS", usedForTestsOnly: false, readableName: "No Immediate Long Projects", displayName: "NO_IMMEDIATE_LONG_PROJECTS" } 
		,5640486: { id: 5640486, category: "Commerce", experimentVariants: null, description: "The 2nd version of the Home Price Tool", name: "ESTIMATE_V2", usedForTestsOnly: false, readableName: "Estimate v2", displayName: "ESTIMATE_V2" } 
		,654786: { id: 654786, category: "Commerce", experimentVariants: null, description: "Social share for individual estimate pages", name: "ESTIMATE_V2_SHARE", usedForTestsOnly: false, readableName: "Social Share for Estimate v2", displayName: "ESTIMATE_V2_SHARE" } 
		,7815361: { id: 7815361, category: "Commerce", experimentVariants: null, description: "Agents can specify how to split their bonus with other agents on deal details pages in Agent Tools.", name: "DEAL_BONUS_SPLITS", usedForTestsOnly: false, readableName: "Deal Bonus Splits", displayName: "DEAL_BONUS_SPLITS" } 
		,870089: { id: 870089, category: "Commerce", experimentVariants: null, description: "Sort results first by business buckets (active customers > inactive, active deals > closed > failed etc.) and then sort them by how well the words match", name: "AT_SEARCH_BUSINESS_PRI", usedForTestsOnly: false, readableName: "AT Search Business Priority Cluster", displayName: "AT_SEARCH_BUSINESS_PRI" } 
		,4973753: { id: 4973753, category: "Commerce", experimentVariants: null, description: "Send out bulk emails in parallel instead of serially", name: "MULTI_THREADED_EMAIL_SERVICE", usedForTestsOnly: false, readableName: "Multithreaded Email Service", displayName: "MULTI_THREADED_EMAIL_SERVICE" } 
		,465056: { id: 465056, category: "Commerce", experimentVariants: null, description: "Spawn a dialog on the customer details page to end a partner relationship, instead of using Iron", name: "END_PARTNER_RELATIONSHIP_DIALOG", usedForTestsOnly: false, readableName: "Iron Deprecation: End Partner Relationship Dialog", displayName: "END_PARTNER_RELATIONSHIP_DIALOG" } 
		,406848: { id: 406848, category: "Commerce", experimentVariants: null, description: "Spawn a dialog on the customer details page to assign a customer to an agent, instead of using Iron", name: "ASSIGN_TO_AGENT_DIALOG", usedForTestsOnly: false, readableName: "Iron Deprecation: Assign To Agent Dialog", displayName: "ASSIGN_TO_AGENT_DIALOG" } 
		,3290602: { id: 3290602, category: "Commerce", experimentVariants: null, description: "If an ePostcard is blocked by Spam Assassin, send the user a link to view their card on our website", name: "EPOSTCARD_BLOCKED_SPAM_WORKAROUND", usedForTestsOnly: false, readableName: "Epostcard Spam Workaround", displayName: "EPOSTCARD_BLOCKED_SPAM_WORKAROUND" } 
		,7122125: { id: 7122125, category: "Commerce: Connect", experimentVariants: null, description: "Add sell side deals to the partners' client list", name: "CONNECT_SELL_SIDE_DASHBOARD", usedForTestsOnly: false, readableName: "Connect Sell Side Dashboard", displayName: "CONNECT_SELL_SIDE_DASHBOARD" } 
		,2018931: { id: 2018931, category: "Commerce", experimentVariants: null, description: "Allow any agent to access any deal. Intended for AJAX widget testing purposes only.", name: "TEST_DEAL_API_HARDENING", usedForTestsOnly: false, readableName: "Test Deal API Hardening", displayName: "TEST_DEAL_API_HARDENING" } 
		,7122126: { id: 7122126, category: "Commerce: Connect", experimentVariants: null, description: "Give partner agents a sell deal tools page", name: "PARTNER_SELL_DEAL_TOOLS", usedForTestsOnly: false, readableName: "Partner Sell Deal Tools", displayName: "PARTNER_SELL_DEAL_TOOLS" } 
		,7122127: { id: 7122127, category: "Commerce: Connect", experimentVariants: null, description: "Give partner agents a buy deal tools page", name: "PARTNER_BUY_DEAL_TOOLS", usedForTestsOnly: false, readableName: "Partner Buy Deal Tools", displayName: "PARTNER_BUY_DEAL_TOOLS" } 
		,7122130: { id: 7122130, category: "Commerce", experimentVariants: null, description: "Port over the changes from the Partner buy deal page", name: "REDFIN_BUY_DEAL_V2", usedForTestsOnly: false, readableName: "Redfin Updated Buy Deal Page", displayName: "REDFIN_BUY_DEAL_V2" } 
		,7122128: { id: 7122128, category: "Commerce", experimentVariants: null, description: "Public scouting report", name: "PUBLIC_SCOUTING_REPORT", usedForTestsOnly: false, readableName: "Public Scouting Report", displayName: "PUBLIC_SCOUTING_REPORT" } 
		,7122129: { id: 7122129, category: "Commerce", experimentVariants: null, description: "Entrypoints public scouting report", name: "PUBLIC_SCOUTING_REPORT_ENTRY_POINTS", usedForTestsOnly: false, readableName: "Public Scouting Report Entry Points", displayName: "PUBLIC_SCOUTING_REPORT_ENTRY_POINTS" } 
		,9534834: { id: 9534834, category: "Commerce", experimentVariants: null, description: "Agents can specify whether they serve offers, listings, or both", name: "LISTING_SPECIALISTS", usedForTestsOnly: false, readableName: "Listing Specialists", displayName: "LISTING_SPECIALISTS" } 
		,456404: { id: 456404, category: "Commerce", experimentVariants: null, description: "Send upcoming items emails to associate agents", name: "ASSOC_AGENT_UPCOMING_ITEM_EMAIL", usedForTestsOnly: false, readableName: "Assoc. Agent Upcoming Items Emails", displayName: "ASSOC_AGENT_UPCOMING_ITEM_EMAIL" } 
		,123589: { id: 123589, category: "Commerce", experimentVariants: null, description: "Add a comp manually on the v2 estimate page", name: "ESTIMATE_V2_ADD_MANUAL", usedForTestsOnly: false, readableName: "Add Comp Manually", displayName: "ESTIMATE_V2_ADD_MANUAL" } 
		,7316636: { id: 7316636, category: "Commerce", experimentVariants: null, description: "Ask FAs a few questions about their client at the time they close the tour", name: "CLOSE_TOUR_HOMEOWNER_QUESTIONS", usedForTestsOnly: false, readableName: "Homeowner Questions at Tour Close", displayName: "CLOSE_TOUR_HOMEOWNER_QUESTIONS" } 
		,5743927: { id: 5743927, category: "Commerce", experimentVariants: null, description: "Sell-side deals can have a null listing, but still be allowed to close", name: "DEALS_WITH_NULL_LISTINGS", usedForTestsOnly: false, readableName: "Deals With Null Listings", displayName: "DEALS_WITH_NULL_LISTINGS" } 
		,7745972: { id: 7745972, category: "Commerce", experimentVariants: null, description: "Swaps the default AT feedback tab for one powered by Zendesk.com", name: "ZENDESK_TAB", usedForTestsOnly: false, readableName: "Zendesk Tab", displayName: "ZENDESK_TAB" } 
		,5634581: { id: 5634581, category: "Commerce", experimentVariants: null, description: "Show a tab powered by Zendesk.com for user feedback and swap all tech support on site for zendesk", name: "CUSTOMER_ZENDESK_TAB", usedForTestsOnly: false, readableName: "Customer Zendesk Tab", displayName: "CUSTOMER_ZENDESK_TAB" } 
		,4981642: { id: 4981642, category: "Commerce", experimentVariants: null, description: "Use upgraded version of Zendesk SSO, use the JSON web token version instead of the remote auth version", name: "ZENDESK_SSO_USE_NEW_IMPL", usedForTestsOnly: false, readableName: "Use JSON Web Token implementation of Zendesk SSO", displayName: "ZENDESK_SSO_USE_NEW_IMPL" } 
		,4981643: { id: 4981643, category: "Commerce", experimentVariants: null, description: "Fix for RED-45990 in the Zendesk SSO, login not s", name: "ZENDESK_SSO_45990_FIX", usedForTestsOnly: false, readableName: "Fix for bug RED-45990 Zendesk SSO", displayName: "ZENDESK_SSO_45990_FIX" } 
		,994319: { id: 994319, category: "Commerce", experimentVariants: null, description: "Adds buy and sell checkboxes to agent requests", name: "BUY_SELL_AGENT_REQUESTS", usedForTestsOnly: false, readableName: "Buy/Sell/Both for Agent Requests", displayName: "BUY_SELL_AGENT_REQUESTS" } 
		,5661250: { id: 5661250, category: "Commerce", experimentVariants: null, description: "...In agent tools instead of Iron", name: "AR_DETAILS_PAGE", usedForTestsOnly: false, readableName: "New Agent Request Details page", displayName: "AR_DETAILS_PAGE" } 
		,8841613: { id: 8841613, category: "Commerce", experimentVariants: null, description: "Customers who request listings or consultations will now have those requests directly routed to the proper teams and agents", name: "SELLER_CONSULTATION_DIRECT_ROUTING", usedForTestsOnly: false, readableName: "Direct email and listing routing to agents and agent teams", displayName: "SELLER_CONSULTATION_DIRECT_ROUTING" } 
		,6812921: { id: 6812921, category: "Commerce", experimentVariants: null, description: "Agents will now be able to input OfferInsight information in the offer deal details page, and will also be prompted to enter this information when changing the stage of the deal", name: "OFFER_INSIGHT_DATA_COLLECTION", usedForTestsOnly: false, readableName: "Offer Insights Data Collection in Agent Tools", displayName: "OFFER_INSIGHT_DATA_COLLECTION" } 
		,1853608: { id: 1853608, category: "Commerce", experimentVariants: null, description: "Changes the pricing and commission dialog on deals to reflect new policies", name: "PRICING_FIXES", usedForTestsOnly: false, readableName: "Pricing and Commission Fixes", displayName: "PRICING_FIXES" } 
		,8284005: { id: 8284005, category: "Commerce", experimentVariants: null, description: "On the external agent page (e.g. /tools/external-agents/20732), show a 'Begin Onboarding' link to make it easier to onboard an agent.", name: "ONBOARD_EXTERNAL_AGENT", usedForTestsOnly: false, readableName: "Onboard External Agent", displayName: "ONBOARD_EXTERNAL_AGENT" } 
		,9437995: { id: 9437995, category: "Commerce", experimentVariants: null, description: "Make onboarding agents easier by allowing the new agent to provide an email address for each of their recent clients, so we can survey them and have plenty of reviews on the new agent profile page.", name: "REDFIN_AGENT_HELP_US_SURVEY_YOUR_CLIENTS", usedForTestsOnly: false, readableName: "Redfin Agent, Help Us Survey Your Clients", displayName: "REDFIN_AGENT_HELP_US_SURVEY_YOUR_CLIENTS" } 
		,9437996: { id: 9437996, category: "Commerce: Connect", experimentVariants: null, description: "Allow Partner team to select the show all option on the partner relationships list page", name: "SHOW_ALL_PARTNER_RELATIONSHIPS", usedForTestsOnly: false, readableName: "Show All Partner Relationships", displayName: "SHOW_ALL_PARTNER_RELATIONSHIPS" } 
		,9336193: { id: 9336193, category: "Commerce", experimentVariants: null, description: "Turns off all code that talks to Salesforce", name: "NO_SALESFORCE", usedForTestsOnly: false, readableName: "Disable Salesforce", displayName: "NO_SALESFORCE" } 
		,5450624: { id: 5450624, category: "Commerce", experimentVariants: null, description: "A tab in Agent Tools that is visible to devs/IT and has solutions to common problems", name: "AGENT_TOOLS_DEV_TAB", usedForTestsOnly: false, readableName: "Dev Tab in Agent Tools", displayName: "AGENT_TOOLS_DEV_TAB" } 
		,5469748: { id: 5469748, category: "Commerce", experimentVariants: null, description: "Internal notes about customers are threaded instead of being one flat box", name: "THREADED_CUSTOMER_NOTES", usedForTestsOnly: false, readableName: "Threaded Customer Notes", displayName: "THREADED_CUSTOMER_NOTES" } 
		,4134601: { id: 4134601, category: "Commerce", experimentVariants: null, description: "Work to bring LDP/Tour's Home Info Card into alignment with HVT's", name: "HIC_REFACTOR", usedForTestsOnly: false, readableName: "Home Info Card Refactor", displayName: "HIC_REFACTOR" } 
		,4844197: { id: 4844197, category: "Commerce", experimentVariants: null, description: "Adds an agent-specific dashboard to agent tools (/tools), moving the current team dashboard to /tools/team.", name: "AGENT_HOMEPAGE", usedForTestsOnly: false, readableName: "Agent Homepage In Agent Tools", displayName: "AGENT_HOMEPAGE" } 
		,484675: { id: 484675, category: "Commerce", experimentVariants: null, description: "Enable Agents to set reminders for a given customer", name: "AGENT_REMINDERS", usedForTestsOnly: false, readableName: "Agent Reminders", displayName: "AGENT_REMINDERS" } 
		,2033332: { id: 2033332, category: "Commerce", experimentVariants: null, description: "Allow for users and agents to create emails surveying potential buyers on the price of a home", name: "PRICE_WHISPERER", usedForTestsOnly: false, readableName: "Price Whisperer", displayName: "PRICE_WHISPERER" } 
		,4646455: { id: 4646455, category: "Commerce", experimentVariants: null, description: "Allow for users to submit requests to create a PriceWhisper through the customer-facing website", name: "CUSTOMER_FACING_PRICE_WHISPERER", usedForTestsOnly: false, readableName: "Customer Facing Price Whisperer", displayName: "CUSTOMER_FACING_PRICE_WHISPERER" } 
		,9949172: { id: 9949172, category: "Commerce", experimentVariants: null, description: "Allow for agents to filter deals for deals with incomplete surveys.", name: "INCOMPLETE_SURVEY_FILTER", usedForTestsOnly: false, readableName: "Deal Filter - Incomplete Survey", displayName: "INCOMPLETE_SURVEY_FILTER" } 
		,2014796: { id: 2014796, category: "Commerce", experimentVariants: null, description: "Allow for agents to become the owner of an agent request.", name: "AGENT_REQUEST_OWNER", usedForTestsOnly: false, readableName: "Agent Request Owner", displayName: "AGENT_REQUEST_OWNER" } 
		,7851705: { id: 7851705, category: "Commerce", experimentVariants: null, description: "Adds an iOS app-specific link to the tour calendar appointments", name: "TOUR_CALENDAR_APPOINTMENT_MOBILE_LINK", usedForTestsOnly: false, readableName: "Tour Calendar Appointment Mobile Link", displayName: "TOUR_CALENDAR_APPOINTMENT_MOBILE_LINK" } 
		,619148: { id: 619148, category: "Commerce", experimentVariants: [{"name":"Control","description":"Control Copy"},{"name":"Alternate","description":"Alternate Copy"}], description: "A/B Tests for the Price Whisperer landing page copy", name: "PRICE_WHISPERER_LANDING_PAGE_LANGUAGE", usedForTestsOnly: false, readableName: "Price Whisperer Landing Page Language", displayName: "PRICE_WHISPERER_LANDING_PAGE_LANGUAGE" } 
		,330835: { id: 330835, category: "Commerce", experimentVariants: null, description: "Allow for agents to be scheduled as a shadow agent on a tour.", name: "SHADOW_TOURS", usedForTestsOnly: false, readableName: "Shadow Tours", displayName: "SHADOW_TOURS" } 
		,330836: { id: 330836, category: "Commerce", experimentVariants: null, description: "Sync shadow tours on gcal.", name: "SHADOW_TOUR_CAL_SYNC", usedForTestsOnly: false, readableName: "Shadow Tours Calendar Sync", displayName: "SHADOW_TOUR_CAL_SYNC" } 
		,5319580: { id: 5319580, category: "Commerce", experimentVariants: null, description: "Adds the ability for agents to recommend specific partners during the handoff process", name: "RECOMMENDED_PARTNER_HANDOFFS", usedForTestsOnly: false, readableName: "Recommending Partners in Handoffs", displayName: "RECOMMENDED_PARTNER_HANDOFFS" } 
		,468472: { id: 468472, category: "Commerce", experimentVariants: null, description: "Change how we display customers on the customer list to make it easier for agents & coordinators to manage their workflow", name: "CUSTOMER_LIST_REVAMP", usedForTestsOnly: false, readableName: "Customer List Revamp", displayName: "CUSTOMER_LIST_REVAMP" } 
		,145734: { id: 145734, category: "Commerce", experimentVariants: null, description: "Adds a dashboard to help credit agents for their pre-existing clients", name: "LEGACY_CLIENTS", usedForTestsOnly: false, readableName: "Legacy Clients", displayName: "LEGACY_CLIENTS" } 
		,468473: { id: 468473, category: "Commerce: Connect", experimentVariants: null, description: "Change how we display customers on the customer list to make it easier for agents & coordinators to manage their workflow", name: "PARTNER_CUSTOMER_LIST_REVAMP", usedForTestsOnly: false, readableName: "Partner Customer List Revamp", displayName: "PARTNER_CUSTOMER_LIST_REVAMP" } 
		,4872104: { id: 4872104, category: "Commerce", experimentVariants: null, description: "Prevents agents from viewing deals that would violate dual agency restrictions", name: "DUAL_AGENCY_PROTECTION", usedForTestsOnly: false, readableName: "Dual Agency Protection in Agent Tools", displayName: "DUAL_AGENCY_PROTECTION" } 
		,7811924: { id: 7811924, category: "Commerce", experimentVariants: null, description: "Allows display/add/update/removal of records from the effective team history of an agent", name: "EFFECTIVE_AGENT_TEAM_HISTORY", usedForTestsOnly: false, readableName: "Effective Agent Team History in Agent Profile", displayName: "EFFECTIVE_AGENT_TEAM_HISTORY" } 
		,7654797: { id: 7654797, category: "Commerce", experimentVariants: null, description: "The addition of a full legal name attribute to customers that is editable and back-populated", name: "FULL_LEGAL_NAME", usedForTestsOnly: false, readableName: "Full Legal Name as an independent field for customers", displayName: "FULL_LEGAL_NAME" } 
		,4470022: { id: 4470022, category: "Commerce", experimentVariants: null, description: "An admin page that is specific to Agent Tools (allows AT styling, among other things)", name: "AGENT_TOOLS_ADMIN_PAGE", usedForTestsOnly: false, readableName: "Admin Page in Agent Tools", displayName: "AGENT_TOOLS_ADMIN_PAGE" } 
		,422259: { id: 422259, category: "Commerce", experimentVariants: null, description: "Agents can create a listing flyer with new layouts on sell side deal pages", name: "LISTING_FLYER_V2", usedForTestsOnly: false, readableName: "Listing Flyer Version 2", displayName: "LISTING_FLYER_V2" } 
		,6810300: { id: 6810300, category: "Commerce", experimentVariants: null, description: "Support for CMA selling test in Boston market", name: "BOSTON_CMA", usedForTestsOnly: false, readableName: "Boston CMA", displayName: "BOSTON_CMA" } 
		,8146784: { id: 8146784, category: "Mobile", experimentVariants: null, description: "Enables API endpoint for Facebook login (used by mobile apps, for example)", name: "API_FACEBOOK_LOGIN", usedForTestsOnly: false, readableName: "API Endpoint for Facebook Login", displayName: "API_FACEBOOK_LOGIN" } 
		,3475449: { id: 3475449, category: "Mobile", experimentVariants: null, description: "Enables API endpoint to ask an agent a question about a listing etc. (used by mobile apps, for example)", name: "API_ASK_AN_AGENT", usedForTestsOnly: false, readableName: "API Endpoint to ask an agent a question", displayName: "API_ASK_AN_AGENT" } 
		,917050: { id: 917050, category: "Mobile", experimentVariants: null, description: "Redirect the property details page for ALL properties to the Redfin iOS app when possible", name: "LDP_REDIRECT_ALL_TO_IOS_APP", usedForTestsOnly: false, readableName: "LDP Redirect OFF MARKET to Redfin iOS App", displayName: "LDP_REDIRECT_ALL_TO_IOS_APP" } 
		,3275066: { id: 3275066, category: "Mobile", experimentVariants: null, description: "Redirect the listing details page to the Redfin iOS app when possible", name: "LDP_REDIRECT_TO_IOS_APP", usedForTestsOnly: false, readableName: "LDP Redirect to Redfin iOS App", displayName: "LDP_REDIRECT_TO_IOS_APP" } 
		,2492719: { id: 2492719, category: "Mobile", experimentVariants: null, description: "Enable push notifications to be sent during instant alerts jobs", name: "PUSH_NOTIFICATIONS", usedForTestsOnly: false, readableName: "Push Notifications", displayName: "PUSH_NOTIFICATIONS" } 
		,3652036: { id: 3652036, category: "Mobile", experimentVariants: null, description: "Allows solds to be returned upon request in gis-proximity-search (used by mobile apps)", name: "SOLDS_IN_PROXIMITY_SEARCH", usedForTestsOnly: false, readableName: "Allow solds in gis-proximity-search", displayName: "SOLDS_IN_PROXIMITY_SEARCH" } 
		,6482560: { id: 6482560, category: "Mobile", experimentVariants: null, description: "Enable endpoints for performing ID verification necessary for touring on mobile devices.", name: "MOBILE_ID_VERIFICATION", usedForTestsOnly: false, readableName: "Mobile ID Verification", displayName: "MOBILE_ID_VERIFICATION" } 
		,1953787: { id: 1953787, category: "Mobile", experimentVariants: null, description: "Enable viewing and scheduling tours in Redfin for iOS v3.5.0+. If disabled users will be informed that tours are 'temporarily' turned off.", name: "MOBILE_IOS_TOURS", usedForTestsOnly: false, readableName: "iOS Tours Enabled in v3.5.0+", displayName: "MOBILE_IOS_TOURS" } 
		,713: { id: 713, category: "Mobile", experimentVariants: null, description: "** MUST BE ONLY 100% ON OR OFF IN PROD! ** Enable Agent Contact Box on mobile app LDP. If disabled, then the old agent-ad shows up instead.", name: "MOBILE_APP_LDP_CONTACT_BOX", usedForTestsOnly: false, readableName: "Contact Box on Mobile App LDP", displayName: "MOBILE_APP_LDP_CONTACT_BOX" } 
		,4341274: { id: 4341274, category: "Mobile", experimentVariants: null, description: "** MUST BE ONLY 100% ON OR OFF IN PROD! ** Enable tour button on Mobile App LDP contact box. This only applies when Mobile App LDP Contact box is on. If disabled, then there will only be a contact/ask button. If enabled there can be a tour button as well.", name: "MOBILE_APP_LDP_CONTACT_BOX_TOUR_BUTTON", usedForTestsOnly: false, readableName: "Tour Button on Mobile App LDP Contact Box", displayName: "MOBILE_APP_LDP_CONTACT_BOX_TOUR_BUTTON" } 
		,4758940: { id: 4758940, category: "Mobile", experimentVariants: null, description: "** MUST BE ONLY 100% ON OR OFF IN PROD! ** Enable the new section order in the Mobile App LDP page. If disabled, it will use the old section order in Mobile App LDP page", name: "MOBILE_APP_LDP_NEW_SECTION_ORDER", usedForTestsOnly: false, readableName: "Mobile App LDP New Section Order", displayName: "MOBILE_APP_LDP_NEW_SECTION_ORDER" } 
		,7496492: { id: 7496492, category: "Mobile", experimentVariants: null, description: "** MUST BE ONLY 100% ON OR OFF IN PROD! ** Enable old agent ad on mobile app LDP. If disabled then the old agent ad won't show up.", name: "OLD_MOBILE_APP_LDP_AGENT_AD", usedForTestsOnly: false, readableName: "Old Mobile App LDP Agent Ad", displayName: "OLD_MOBILE_APP_LDP_AGENT_AD" } 
		,7714820: { id: 7714820, category: "Mobile", experimentVariants: null, description: "Enable iOS Smart Banners on the desktop (main) listing details page. If disabled, shows old iOS app ad instead.", name: "IOS_SMART_BANNERS_ON_DESKTOP_LDP", usedForTestsOnly: false, readableName: "iOS Smart Banners on Desktop LDP", displayName: "IOS_SMART_BANNERS_ON_DESKTOP_LDP" } 
		,3626879: { id: 3626879, category: "Mobile", experimentVariants: null, description: "If enabled, causes *all* deal taking agents receive contacts from mobile ask-an-agent instead of just those that have the contact flag on.", name: "MOBILE_ASK_AGENT_IGNORE_LDP_CONTACT_FLAG", usedForTestsOnly: false, readableName: "Ignore LDP Contact Flag on Mobile Ask-an-Agent", displayName: "MOBILE_ASK_AGENT_IGNORE_LDP_CONTACT_FLAG" } 
		,7692139: { id: 7692139, category: "Mobile", experimentVariants: null, description: "Allow the iOS app to disable the cookie that forwards users from the web LDP to the app.", name: "MOBILE_ALLOW_IOS_APP_DISABLE_FORWARDING_FROM_LDP_TO_APP", usedForTestsOnly: false, readableName: "Allow disabling of LDP forwarding from app", displayName: "MOBILE_ALLOW_IOS_APP_DISABLE_FORWARDING_FROM_LDP_TO_APP" } 
		,7906609: { id: 7906609, category: "Mobile", experimentVariants: null, description: "** MUST BE ONLY 100% ON OR OFF IN PROD! ** Enable seller consultation box on mobile app LDP. If disabled then the seller consultation box show up.", name: "MOBILE_APP_SELLER_CONSULTATION_BOX", usedForTestsOnly: false, readableName: "Consultation Box on Mobile App LDP", displayName: "MOBILE_APP_SELLER_CONSULTATION_BOX" } 
		,2391658: { id: 2391658, category: "Mobile Header", experimentVariants: null, description: "Allows the header menu to be mobile friendly and responsive", name: "MOBILE_ENABLED_HEADER", usedForTestsOnly: false, readableName: "Mobile Enabled Header", displayName: "MOBILE_ENABLED_HEADER" } 
		,8112228: { id: 8112228, category: "Mobile Header", experimentVariants: null, description: "Show the Mobile Hamburger Header, when clicked, shows a navigation menu", name: "MOBILE_HAMBURGER_HEADER", usedForTestsOnly: false, readableName: "Mobile Hamburger Header", displayName: "MOBILE_HAMBURGER_HEADER" } 
		,9180422: { id: 9180422, category: "Homepage", experimentVariants: null, description: "Data feeds and next steps on a personalized home page. (Marketplaces team)", name: "HOMEPAGE_PROTOTYPE", usedForTestsOnly: false, readableName: "Home Page Prototype", displayName: "HOMEPAGE_PROTOTYPE" } 
		,3376306: { id: 3376306, category: "Homepage", experimentVariants: null, description: "Change max # of items in home page's feed. Off = 7 items max; On = 15-20 items max", name: "HOMEPAGE_PROTOTYPE_EXTRA_CONTENT", usedForTestsOnly: false, readableName: "Extra Data for Home Page Prototype", displayName: "HOMEPAGE_PROTOTYPE_EXTRA_CONTENT" } 
		,6358050: { id: 6358050, category: "Homepage", experimentVariants: null, description: "New homepage, built on a responsive grid.", name: "RESPONSIVE_HOMEPAGE", usedForTestsOnly: false, readableName: "Responsive Homepage", displayName: "RESPONSIVE_HOMEPAGE" } 
		,8983314: { id: 8983314, category: "Homepage", experimentVariants: null, description: "Always display YouTube video on the homepage, and try to get Google to include it as a thumbnail in our search results.", name: "HOMEPAGE_VIDEO_RICHSNIPPET", usedForTestsOnly: false, readableName: "Homepage Video Rich Snippet", displayName: "HOMEPAGE_VIDEO_RICHSNIPPET" } 
		,1114200: { id: 1114200, category: "Homepage", experimentVariants: null, description: "If 'Responsive Homepage' is also turned on, show returning users their favorites, saved searches, etc.", name: "PERSONALIZED_HOMEPAGE", usedForTestsOnly: false, readableName: "Personalized Homepage", displayName: "PERSONALIZED_HOMEPAGE" } 
		,3873672: { id: 3873672, category: "Homepage", experimentVariants: null, description: "Show OMS on personalized homepage, sometimes", name: "OMS_ON_PERSONALIZED_HOMEPAGE", usedForTestsOnly: false, readableName: "OMS on Personalized Homepage", displayName: "OMS_ON_PERSONALIZED_HOMEPAGE" } 
		,2854625: { id: 2854625, category: "Homepage", experimentVariants: null, description: "If 'Responsive Homepage' is also turned on, show returning users their claimed homes.", name: "CLAIMED_HOMES_ON_HOMEPAGE", usedForTestsOnly: false, readableName: "Claimed Homes on Homepage", displayName: "CLAIMED_HOMES_ON_HOMEPAGE" } 
		,2854626: { id: 2854626, category: "Homepage", experimentVariants: null, description: "If 'Claimed Homes on Homepage' is also turned on, allow returning users to claim a home.", name: "CLAIM_HOMES_FROM_HOMEPAGE", usedForTestsOnly: false, readableName: "Allow Claiming Homes from the Homepage", displayName: "CLAIM_HOMES_FROM_HOMEPAGE" } 
		,8220382: { id: 8220382, category: "Homepage", experimentVariants: null, description: "Show 'Tour These Homes' on the Favorites Widget if user has favorite homes", name: "HOMEPAGE_TOUR_BUTTON", usedForTestsOnly: false, readableName: "Tour Button on Favorites Widget", displayName: "HOMEPAGE_TOUR_BUTTON" } 
		,9322497: { id: 9322497, category: "Re-engagement - Homepage", experimentVariants: [{"name":"big","description":"Show a large ad at the top of the page."},{"name":"small","description":"Show a small banner at the top of the page."},{"name":"mixed","description":"Show a large ad for user's first visit; switch to small banner thereafter."}], description: "Comparing number of app installs between different Redfin mobile app ads", name: "HOMEPAGE_MOBILE_AD_EXPERIMENT", usedForTestsOnly: false, readableName: "Homepage Mobile Ad Experiment", displayName: "HOMEPAGE_MOBILE_AD_EXPERIMENT" } 
		,9145554: { id: 9145554, category: "Homepage", experimentVariants: null, description: "If 'Responsive Homepage' is also turned on, show returning users listing recommendations.", name: "LISTING_RECOMMENDATION_ON_HOMEPAGE", usedForTestsOnly: false, readableName: "Listing Recommendation on Homepage", displayName: "LISTING_RECOMMENDATION_ON_HOMEPAGE" } 
		,4036155: { id: 4036155, category: "Homepage", experimentVariants: null, description: "Link to the seller consultation form instead of the Home Value Tool on the home page.", name: "HOMEPAGE_SELL_MY_HOME_LINK", usedForTestsOnly: false, readableName: "Sell My Home Link", displayName: "HOMEPAGE_SELL_MY_HOME_LINK" } 
		,6487230: { id: 6487230, category: "Re-engagement - Homepage", experimentVariants: [{"name":"Old_homepage","description":"Visitors in the control cohort will not see any changes to the homepage"},{"name":"New_homepage","description":"Visitors in the new homepage cohort will see the new responsive homepage"}], description: "Comparing successful searches or HVT clicks with the new homepage or the old homepage", name: "NEW_HOMEPAGE_EXPERIMENT", usedForTestsOnly: false, readableName: "Test new responsive homepage", displayName: "NEW_HOMEPAGE_EXPERIMENT" } 
		,9739838: { id: 9739838, category: "Re-engagement - Registration", experimentVariants: [{"name":"email_primary_form","description":"Visitors in the control cohort will not see any changes to the registration process"},{"name":"social_primary_form","description":"social_primary_form will hide non-social registration behind a click"}], description: "Comparing rates of successful registrations with different primary forms", name: "SOCIAL_PRIMARY_REGISTER_EXPERIMENT", usedForTestsOnly: false, readableName: "Test social buttons as primary register form", displayName: "SOCIAL_PRIMARY_REGISTER_EXPERIMENT" } 
		,4943411: { id: 4943411, category: "Re-engagement - Registration", experimentVariants: [{"name":"control_register","description":"Visitors in the control_register cohort will not see any changes to the registration process"},{"name":"passwordless_register","description":"Visitors in the passwordless_register cohort will not be required to provide a password"},{"name":"email_only_register","description":"Visitors in the email_only_register cohort will only be required to provide an email address"}], description: "Comparing rates of successful registrations with different numbers of required fields", name: "FEWER_FIELDS_REGISTER_EXPERIMENT", usedForTestsOnly: false, readableName: "Test fewer fields on the login popup", displayName: "FEWER_FIELDS_REGISTER_EXPERIMENT" } 
		,9160666: { id: 9160666, category: "Re-engagement - Registration", experimentVariants: [{"name":"Control","description":"No social buttons"},{"name":"In_header","description":"Social buttons in the header"},{"name":"In_footer","description":"Social buttons in the footer"},{"name":"Top_right","description":"Social buttons in a vertical bar in the top right of the page"},{"name":"Under_header","description":"Social buttons across the top, underneath the header"}], description: "Add social like and follow buttons in the header and footer on the home page ONLY", name: "SOCIAL_BUTTONS_IN_HEADER_FOOTER", usedForTestsOnly: false, readableName: "Social buttons in the header and footer", displayName: "SOCIAL_BUTTONS_IN_HEADER_FOOTER" } 
		,8441057: { id: 8441057, category: "Re-engagement - Homepage", experimentVariants: [{"name":"No_widget","description":"No Recommendations Widget"},{"name":"Higher_widget","description":"Recommendations Widget in the top right corner"},{"name":"Lower_widget","description":"Recommendations Widget in the left column below saved searches"}], description: "Comparing online user score with the presence/location of the widget", name: "HOMEPAGE_MATCHMAKER_EXPERIMENT", usedForTestsOnly: false, readableName: "Test Recommendations Widget on new homepage", displayName: "HOMEPAGE_MATCHMAKER_EXPERIMENT" } 
		,7432007: { id: 7432007, category: "Re-engagement - Homepage", experimentVariants: [{"name":"App_store_button","description":"Download through app store button"},{"name":"Text_to_download_link","description":"Download through Text-To-Download link"}], description: "Comparing mobile app downloads with app store buttons and text-to-download link", name: "MOBILE_APP_DOWNLOAD", usedForTestsOnly: false, readableName: "Test Homepage Mobile App Download within body and user notification", displayName: "MOBILE_APP_DOWNLOAD" } 
		,9820021: { id: 9820021, category: "Re-engagement - Homepage", experimentVariants: [{"name":"Home_Value_Tool","description":"Clicking search will take users to Home Value Tool"},{"name":"Sell_My_Home","description":"Clicking serach will take users to Home Seller Consultation Form"}], description: "Comparing whether HVT or Home Seller Consultation Form will drive more contacts", name: "HOMEPAGE_SELL_MY_HOME_EXPERIMENT", usedForTestsOnly: false, readableName: "Sell My Home Widget", displayName: "HOMEPAGE_SELL_MY_HOME_EXPERIMENT" } 
		,32456878: { id: 32456878, category: "Geocoder", experimentVariants: null, description: "Chooses which Geocoder: Google or Geostan", name: "GEOCODER_FLAG", usedForTestsOnly: false, readableName: "Geocoder Flag", displayName: "GEOCODER_FLAG" } 
		,2863188: { id: 2863188, category: "Data Team", experimentVariants: null, description: "Allows for 'Saving' of Neighborhood Data in the new Editor", name: "NEIGHBORHOOD_EDITOR_NEW", usedForTestsOnly: false, readableName: "New Neighborhood Editor", displayName: "NEIGHBORHOOD_EDITOR_NEW" } 
		,4581652: { id: 4581652, category: "Data Team", experimentVariants: null, description: "Enable the listings matchmaker widget in the agent dashboard.", name: "LISTING_MATCHMAKER_WIDGET", usedForTestsOnly: false, readableName: "Listing Matchmaker Widget", displayName: "LISTING_MATCHMAKER_WIDGET" } 
		,5456392: { id: 5456392, category: "Stability: Major Features", experimentVariants: null, description: "Enable the listing details page and all its associated endpoints", name: "LISTING_DETAILS_PAGE", usedForTestsOnly: false, readableName: "Listing Details Page", displayName: "LISTING_DETAILS_PAGE" } 
		,6196468: { id: 6196468, category: "Stability: Major Features", experimentVariants: null, description: "Enable the map page and all its associated endpoints", name: "MAP_PAGE", usedForTestsOnly: false, readableName: "Map Page", displayName: "MAP_PAGE" } 
		,2779895: { id: 2779895, category: "Stability: Major Features", experimentVariants: null, description: "Enable the region details page and all its associated endpoints", name: "REGION_PAGE", usedForTestsOnly: false, readableName: "Region Page", displayName: "REGION_PAGE" } 
		,2779896: { id: 2779896, category: "Stability: Major Features", experimentVariants: null, description: "Enable Doubleclick For Publishers On-site Messaging Service (aka Google Ads)", name: "DFP_OMS", usedForTestsOnly: false, readableName: "DFP OMS", displayName: "DFP_OMS" } 
		,6195392: { id: 6195392, category: "Stability: Major Features", experimentVariants: null, description: "If a user is logged into Facebook, and the Facebook account is associated with a Redfin account, but the user is NOT logged into Redfin, should we log them into Redfin?", name: "ALLOW_FACEBOOK_AUTOLOGIN", usedForTestsOnly: false, readableName: "Facebook - Allow Auto Login", displayName: "ALLOW_FACEBOOK_AUTOLOGIN" } 
		,7171209: { id: 7171209, category: "Stability: Major Features", experimentVariants: null, description: "Turns on or off the html compression for all responses", name: "HTML_COMPRESSION", usedForTestsOnly: false, readableName: "HTML Compression", displayName: "HTML_COMPRESSION" } 
		,3588180: { id: 3588180, category: "Stability: Major Features", experimentVariants: null, description: "Turns on error colleting for all JS errors that bubble up to the window. Errors are recorded in NewRelic", name: "JS_ERROR_LOGGING", usedForTestsOnly: false, readableName: "JS Error Recording", displayName: "JS_ERROR_LOGGING" } 
	} 
}; 
var g_gender = { 
	NOT_SPECIFIED: 1 
	,MALE: 2 
	,FEMALE: 3 
	,GROUP: 4 
	,idToObj: { 
		1: { id: 1, possessiveAdjective: "their", objectPronoun: "them", pronoun: "they", name: "NOT_SPECIFIED", toBePresentIndicative: "are", possessivePronoun: "theirs", displayName: "Not Specified" } 
		,2: { id: 2, possessiveAdjective: "his", objectPronoun: "him", pronoun: "he", name: "MALE", toBePresentIndicative: "is", possessivePronoun: "his", displayName: "Male" } 
		,3: { id: 3, possessiveAdjective: "her", objectPronoun: "her", pronoun: "she", name: "FEMALE", toBePresentIndicative: "is", possessivePronoun: "hers", displayName: "Female" } 
		,4: { id: 4, possessiveAdjective: "their", objectPronoun: "them", pronoun: "they", name: "GROUP", toBePresentIndicative: "are", possessivePronoun: "theirs", displayName: "Group" } 
	} 
}; 
var g_listingPhotoType = { 
	THUMBNAIL: { id: "T", photoDir: "tmbphoto", fileNamePrefix: "genTmb.", name: "THUMBNAIL", maxHeight: 60, maxWidth: 80, displayName: "Thumbnail" } 
	,MID_SIZE: { id: "M", photoDir: "midphoto", fileNamePrefix: "genMid.", name: "MID_SIZE", maxHeight: 150, maxWidth: 200, displayName: "Mid Size" } 
	,FULL_SIZE: { id: "F", photoDir: "bigphoto", fileNamePrefix: "", name: "FULL_SIZE", maxHeight: 300, maxWidth: 400, displayName: "Full Size" } 
	,SPRITE_OLD_LDP: { id: "O", photoDir: "ldpsprite", fileNamePrefix: "osprite.", name: "SPRITE_OLD_LDP", maxHeight: 312, maxWidth: 416, displayName: "Old LDP Sprite" } 
	,SPRITE_NEW_LDP: { id: "N", photoDir: "ldpsprite", fileNamePrefix: "nsprite.", name: "SPRITE_NEW_LDP", maxHeight: 420, maxWidth: 623, displayName: "New LDP Sprite" } 
}; 
var g_mlsSashMessage = { 
	PENDING: 1 
	,CONTINGENT: 2 
	,UNDER_CONTRACT: 4 
	,BACKUP_OFFERS: 8 
	,idToObj: { 
		1: { id: 1, description: "Sale Pending", name: "PENDING", displayName: "Pending" } 
		,2: { id: 2, description: "Sale Contingent", name: "CONTINGENT", displayName: "Contingent" } 
		,4: { id: 4, description: "Sale Under Contract", name: "UNDER_CONTRACT", displayName: "Under Contract" } 
		,8: { id: 8, description: "Backup Offers", name: "BACKUP_OFFERS", displayName: "Backup Offers" } 
	} 
}; 
var g_mobileDownloadCampaignTargetType = { 
	USER_NOTIFICATION: 1 
	,DESKTOP_ADS: 2 
	,idToObj: { 
		1: { id: 1, name: "USER_NOTIFICATION", displayName: "USER_NOTIFICATION" } 
		,2: { id: 2, name: "DESKTOP_ADS", displayName: "DESKTOP_ADS" } 
	} 
}; 
var g_propertyTypes = { 
	UNKNOWN: 1 
	,OTHER: 2 
	,CONDO_COOP: 3 
	,MULTI_FAMILY_2_TO_4: 4 
	,MULTI_FAMILY_5_PLUS: 5 
	,SINGLE_FAMILY_RESIDENTIAL: 6 
	,RANCH: 7 
	,VACANT_LAND: 8 
	,TIMESHARE: 9 
	,MOBILE_MANUFACTURED: 10 
	,PARKING: 11 
	,MOORAGE: 12 
	,TOWNHOUSE: 13 
	,idToObj: { 
		1: { id: 1, name: "UNKNOWN", isServiced: false, hasStats: false, shortDisplay: "Unk", displayName: "Unknown" } 
		,2: { id: 2, name: "OTHER", isServiced: false, hasStats: false, shortDisplay: "Other", displayName: "Other" } 
		,3: { id: 3, name: "CONDO_COOP", isServiced: true, hasStats: true, shortDisplay: "Condo", displayName: "Condo/Coop" } 
		,4: { id: 4, name: "MULTI_FAMILY_2_TO_4", isServiced: true, hasStats: false, shortDisplay: "Multi-Family (2-4 Unit)", displayName: "Multi-Family (2-4 Unit)" } 
		,5: { id: 5, name: "MULTI_FAMILY_5_PLUS", isServiced: false, hasStats: false, shortDisplay: "Multi-Family (5+ Unit)", displayName: "Multi-Family (5+ Unit)" } 
		,6: { id: 6, name: "SINGLE_FAMILY_RESIDENTIAL", isServiced: true, hasStats: true, shortDisplay: "House", displayName: "Single Family Residential" } 
		,7: { id: 7, name: "RANCH", isServiced: false, hasStats: false, shortDisplay: "Ranch", displayName: "Ranch" } 
		,8: { id: 8, name: "VACANT_LAND", isServiced: false, hasStats: false, shortDisplay: "Vacant Land", displayName: "Vacant Land" } 
		,9: { id: 9, name: "TIMESHARE", isServiced: false, hasStats: false, shortDisplay: "Timeshare", displayName: "Timeshare" } 
		,10: { id: 10, name: "MOBILE_MANUFACTURED", isServiced: false, hasStats: false, shortDisplay: "Mobile/Manufactured Home", displayName: "Mobile/Manufactured Home" } 
		,11: { id: 11, name: "PARKING", isServiced: false, hasStats: false, shortDisplay: "Parking", displayName: "Parking" } 
		,12: { id: 12, name: "MOORAGE", isServiced: false, hasStats: false, shortDisplay: "Moorage", displayName: "Moorage" } 
		,13: { id: 13, name: "TOWNHOUSE", isServiced: true, hasStats: false, shortDisplay: "Townhouse", displayName: "Townhouse" } 
	} 
}; 
var g_recommendationLocalityType = { 
	NEIGHBORHOOD: 1 
	,ZIP_CODE: 2 
	,CITY: 3 
	,SERVICE_REGION: 4 
	,idToObj: { 
		1: { id: 1, name: "NEIGHBORHOOD", displayName: "Neighborhood" } 
		,2: { id: 2, name: "ZIP_CODE", displayName: "Zip Code" } 
		,3: { id: 3, name: "CITY", displayName: "City" } 
		,4: { id: 4, name: "SERVICE_REGION", displayName: "Service Region" } 
	} 
}; 
var g_recommendationType = { 
	RECOMMENDED: 1 
	,TOP: 2 
	,PREFERRED: 3 
	,idToObj: { 
		1: { id: 1, name: "RECOMMENDED", displayName: "Recommended" } 
		,2: { id: 2, name: "TOP", displayName: "Top" } 
		,3: { id: 3, name: "PREFERRED", displayName: "Preferred" } 
	} 
}; 
var g_recommendationType = { 
	RECOMMENDED: 1 
	,TOP: 2 
	,PREFERRED: 3 
	,idToObj: { 
		1: { id: 1, name: "RECOMMENDED", displayName: "Recommended" } 
		,2: { id: 2, name: "TOP", displayName: "Top" } 
		,3: { id: 3, name: "PREFERRED", displayName: "Preferred" } 
	} 
}; 
var g_referralContactType = { 
	AGENT_REQUEST: 1 
	,TOUR_REQUEST: 2 
	,idToObj: { 
		1: { id: 1, name: "AGENT_REQUEST", displayName: "Agent Request" } 
		,2: { id: 2, name: "TOUR_REQUEST", displayName: "Tour Request" } 
	} 
}; 
var g_regionType = { 
	NEIGHBORHOOD: 1 
	,ZIP_CODE: 2 
	,STATE: 4 
	,COUNTY: 5 
	,PLACE: 6 
	,SCHOOL: 7 
	,SCHOOL_DISTRICT: 8 
	,SERVICE_REGION: 9 
	,idToObj: { 
		1: { id: 1, tableName: "neighborhoods", name: "NEIGHBORHOOD", idColumnName: "neighborhood_id", pluralName: "Neighborhoods", displayName: "Neighborhood" } 
		,2: { id: 2, tableName: "zip_codes", name: "ZIP_CODE", idColumnName: "zip_code_id", pluralName: "Zip Codes", displayName: "Zip Code" } 
		,4: { id: 4, tableName: "states", name: "STATE", idColumnName: "state_id", pluralName: "States", displayName: "State" } 
		,5: { id: 5, tableName: "counties", name: "COUNTY", idColumnName: "county_id", pluralName: "Counties", displayName: "County" } 
		,6: { id: 6, tableName: "places", name: "PLACE", idColumnName: "place_id", pluralName: "Cities", displayName: "City" } 
		,7: { id: 7, tableName: "schools", name: "SCHOOL", idColumnName: "school_id", pluralName: "Schools", displayName: "School" } 
		,8: { id: 8, tableName: "school_districts", name: "SCHOOL_DISTRICT", idColumnName: "school_districts_id", pluralName: "School Districts", displayName: "School District" } 
		,9: { id: 9, tableName: "service_regions", name: "SERVICE_REGION", idColumnName: "service_region_id", pluralName: "Service Regions", displayName: "Service Region" } 
	} 
}; 
var g_registrationAuthority = { 
	REDFIN: { id: 0, name: "REDFIN", displayName: "Redfin" } 
	,FACEBOOK: { id: 0, name: "FACEBOOK", displayName: "Facebook" } 
	,GOOGLE: { id: 0, name: "GOOGLE", displayName: "Google" } 
}; 
var g_registrationPlatform = { 
	WEBSITE: { name: "WEBSITE", displayName: "Website" } 
	,IPHONE: { name: "IPHONE", displayName: "iPhone" } 
	,ANDROID: { name: "ANDROID", displayName: "Android" } 
	,IPAD: { name: "IPAD", displayName: "iPad" } 
	,MOBILE_WEB: { name: "MOBILE_WEB", displayName: "MobileWeb" } 
}; 
var g_savedSearchCreatedVia = { 
	WEBSITE: 1 
	,IPHONE: 2 
	,MAP_WELCOME: 3 
	,LD_WELCOME: 4 
	,ANDROID: 5 
	,DM_CAMPAIGN: 6 
	,LDP_FOLLOW: 7 
	,LDP_LIGHTBOX: 8 
	,SWITCH_ON_MAP: 9 
	,SWITCH_ON_HOME: 10 
	,POP_UP_MAP: 11 
	,REGION_PAGE: 12 
	,BUTTON_ON_MAP_SIDE: 13 
	,BUTTON_ON_MAP_BOTTOM: 14 
	,LDP_REGISTRATION_DIV: 15 
	,AGENT_SAVED_SEARCH: 16 
	,PROMPT_SAVE_PARAM_ON_MAP: 17 
	,HOMEPAGE: 18 
	,idToObj: { 
		1: { id: 1, name: "WEBSITE", displayName: "Website" } 
		,2: { id: 2, name: "IPHONE", displayName: "iPhone" } 
		,3: { id: 3, name: "MAP_WELCOME", displayName: "Welcome Dialog on map" } 
		,4: { id: 4, name: "LD_WELCOME", displayName: "Welcome Dialog on listing details" } 
		,5: { id: 5, name: "ANDROID", displayName: "Android" } 
		,6: { id: 6, name: "DM_CAMPAIGN", displayName: "Direct Marketing Campaign" } 
		,7: { id: 7, name: "LDP_FOLLOW", displayName: "LDP Similars Follow" } 
		,8: { id: 8, name: "LDP_LIGHTBOX", displayName: "LDP Lightbox" } 
		,9: { id: 9, name: "SWITCH_ON_MAP", displayName: "Experiment with switch on map page" } 
		,10: { id: 10, name: "SWITCH_ON_HOME", displayName: "Experiment with switche on home page" } 
		,11: { id: 11, name: "POP_UP_MAP", displayName: "Experiment with popup on map page" } 
		,12: { id: 12, name: "REGION_PAGE", displayName: "Region Page Email Button" } 
		,13: { id: 13, name: "BUTTON_ON_MAP_SIDE", displayName: "Email me new listings button w/out switch" } 
		,14: { id: 14, name: "BUTTON_ON_MAP_BOTTOM", displayName: "Save link under listings" } 
		,15: { id: 15, name: "LDP_REGISTRATION_DIV", displayName: "LDP Registration Div" } 
		,16: { id: 16, name: "AGENT_SAVED_SEARCH", displayName: "Agent saves search for customer" } 
		,17: { id: 17, name: "PROMPT_SAVE_PARAM_ON_MAP", displayName: "Prompt_save parameter on map load" } 
		,18: { id: 18, name: "HOMEPAGE", displayName: "Homepage SavedSearches widget" } 
	} 
}; 
var g_searchResultDisplayType = { 
	NONE: 1 
	,LISTING: 2 
	,COUNTY_SALE: 3 
	,MLS_SALE: 4 
	,MLS_SALE_WITH_COUNTY: 5 
	,CENSORED_MLS_SALE: 6 
	,CENSORED_MLS_SALE_WITH_COUNTY: 7 
	,idToObj: { 
		1: { id: 1, isSale: false, isListing: false, name: "NONE", isCensoredSale: false, displayName: "NONE" } 
		,2: { id: 2, isSale: false, isListing: true, name: "LISTING", isCensoredSale: false, displayName: "LISTING" } 
		,3: { id: 3, isSale: true, isListing: false, name: "COUNTY_SALE", isCensoredSale: false, displayName: "COUNTY_SALE" } 
		,4: { id: 4, isSale: true, isListing: true, name: "MLS_SALE", isCensoredSale: false, displayName: "MLS_SALE" } 
		,5: { id: 5, isSale: true, isListing: true, name: "MLS_SALE_WITH_COUNTY", isCensoredSale: false, displayName: "MLS_SALE_WITH_COUNTY" } 
		,6: { id: 6, isSale: true, isListing: true, name: "CENSORED_MLS_SALE", isCensoredSale: true, displayName: "CENSORED_MLS_SALE" } 
		,7: { id: 7, isSale: true, isListing: true, name: "CENSORED_MLS_SALE_WITH_COUNTY", isCensoredSale: true, displayName: "CENSORED_MLS_SALE_WITH_COUNTY" } 
	} 
}; 
var g_searchStatuses = { 
	ACTIVE: 1 
	,CONTINGENT: 2 
	,SOLD: 4 
	,PRE_ON_MARKET: 8 
	,OFF_MARKET: 16 
	,NULL_STATUS: 32 
	,OFF_MARKET_UNKNOWN: 64 
	,PENDING: 128 
	,idToObj: { 
		1: { id: 1, isActivish: true, description: "", name: "ACTIVE", isForSale: true, displayName: "Active" } 
		,2: { id: 2, isActivish: true, description: "", name: "CONTINGENT", isForSale: true, displayName: "Contingent" } 
		,4: { id: 4, isActivish: false, description: "", name: "SOLD", isForSale: false, displayName: "Sold" } 
		,8: { id: 8, isActivish: false, description: "", name: "PRE_ON_MARKET", isForSale: true, displayName: "Pre On-Market" } 
		,16: { id: 16, isActivish: false, description: "The listing is no longer on the market, but it did not sell (it was withdrawn or expired)", name: "OFF_MARKET", isForSale: false, displayName: "Off Market" } 
		,32: { id: 32, isActivish: false, description: "", name: "NULL_STATUS", isForSale: false, displayName: "Null Status" } 
		,64: { id: 64, isActivish: false, description: "The listing is no longer on the market, but the reason why is unknown", name: "OFF_MARKET_UNKNOWN", isForSale: false, displayName: "Unknown (Off Market)" } 
		,128: { id: 128, isActivish: true, description: "", name: "PENDING", isForSale: false, displayName: "Pending" } 
	} 
}; 
var g_servicePolicies = { 
	BELOW_CONNECT_MIN_PRICE: 0 
	,BANK_OWNED: 2 
	,OUT_OF_AREA: 3 
	,NOT_FOR_SALE: 4 
	,PROPERTY_TYPE_NOT_SERVICED: 5 
	,FSBO: 6 
	,UNSUPPORTED_SHORT_SALE: 7 
	,BELOW_DIRECT_MIN_PRICE: 8 
	,CONNECT_AREA_REDFIN_AGENT: 9 
	,NOT_MLS: 10 
	,OUT_OF_SERVICE: 11 
	,UNPOSSIBLE: 12 
	,CONNECT: 13 
	,REDFIN_DIRECT: 14 
	,CONNECT_OVERFLOW: 15 
	,CONNECT_REFUND_REDFIN_TOUR: 16 
	,CONNECT_BELOW_DIRECT_MIN_PRICE: 17 
	,REDFIN_AGENT_BELOW_DIRECT_MIN_PRICE: 18 
	,CONNECT_RANDOM_AGENT_CHOICE_EXPERIMENT: 19 
	,BLENDED_REDFIN_CONNECT: 20 
	,CONNECT_RECOMMENDED_AGENT_CHOICE_EXPERIMENT: 21 
	,REDFIN_DIRECT_PREFERRED_AGENT: 22 
	,REDFIN_DIRECT_ASSIGNED_AGENT: 23 
	,CONNECT_SHORT_SALE: 24 
	,REDFIN_DIRECT_SHORT_SALE: 25 
	,BLENDED_REDFIN_CONNECT_SHORT_SALE: 26 
	,CONNECT_ASSIGNED_AGENT: 27 
	,REDFIN_DIRECT_HIGH_END: 28 
	,REDFIN_DIRECT_HIGH_END_SHORT_SALE: 29 
	,idToObj: { 
		0: { buyWithAgentType: null, id: 0, defaultMessage: "Below Partner minimum price", tourWithAgentType: null, name: "BELOW_CONNECT_MIN_PRICE", displayName: "BELOW_CONNECT_MIN_PRICE" } 
		,2: { buyWithAgentType: null, id: 2, defaultMessage: "This foreclosed home is not currently for sale.", tourWithAgentType: null, name: "BANK_OWNED", displayName: "BANK_OWNED" } 
		,3: { buyWithAgentType: null, id: 3, defaultMessage: "The listing is not in our service area.", tourWithAgentType: null, name: "OUT_OF_AREA", displayName: "OUT_OF_AREA" } 
		,4: { buyWithAgentType: null, id: 4, defaultMessage: "The property is not for sale.", tourWithAgentType: null, name: "NOT_FOR_SALE", displayName: "NOT_FOR_SALE" } 
		,5: { buyWithAgentType: null, id: 5, defaultMessage: "We don't currently offer tours for Multi-Family with 5 or more units, Land, Timeshares, Ranches, Parking, Moorage, and Mobile Homes.", tourWithAgentType: null, name: "PROPERTY_TYPE_NOT_SERVICED", displayName: "PROPERTY_TYPE_NOT_SERVICED" } 
		,6: { buyWithAgentType: null, id: 6, defaultMessage: "We don't currently offer tours for FSBO properties.", tourWithAgentType: null, name: "FSBO", displayName: "FSBO" } 
		,7: { buyWithAgentType: null, id: 7, defaultMessage: "We don't currently offer tours for Short Sales.", tourWithAgentType: null, name: "UNSUPPORTED_SHORT_SALE", displayName: "UNSUPPORTED_SHORT_SALE" } 
		,8: { buyWithAgentType: null, id: 8, defaultMessage: "Below Direct minimum price", tourWithAgentType: null, name: "BELOW_DIRECT_MIN_PRICE", displayName: "BELOW_DIRECT_MIN_PRICE" } 
		,9: { buyWithAgentType: null, id: 9, defaultMessage: "Property is in partner area but customer has Redfin agent", tourWithAgentType: null, name: "CONNECT_AREA_REDFIN_AGENT", displayName: "CONNECT_AREA_REDFIN_AGENT" } 
		,10: { buyWithAgentType: null, id: 10, defaultMessage: "We don't currently offer tours for non-MLS listed properties.", tourWithAgentType: null, name: "NOT_MLS", displayName: "NOT_MLS" } 
		,11: { buyWithAgentType: null, id: 11, defaultMessage: "Currently do not have Connect capacity to service the listing. This only happens in Connect regions.", tourWithAgentType: null, name: "OUT_OF_SERVICE", displayName: "OUT_OF_SERVICE" } 
		,12: { buyWithAgentType: 1, id: 12, defaultMessage: "We don't have capacity, but we're not going to block demand.", tourWithAgentType: 1, name: "UNPOSSIBLE", displayName: "UNPOSSIBLE" } 
		,13: { buyWithAgentType: 2, id: 13, defaultMessage: "We are directing the user to our partner agents.", tourWithAgentType: 2, name: "CONNECT", displayName: "CONNECT" } 
		,14: { buyWithAgentType: 1, id: 14, defaultMessage: "We are directing the user to our direct agents.", tourWithAgentType: 1, name: "REDFIN_DIRECT", displayName: "REDFIN_DIRECT" } 
		,15: { buyWithAgentType: 2, id: 15, defaultMessage: "We are redirecting Redfin demand to our partner agents.", tourWithAgentType: 2, name: "CONNECT_OVERFLOW", displayName: "CONNECT_OVERFLOW" } 
		,16: { buyWithAgentType: 2, id: 16, defaultMessage: "Redfin will tour the customer, but offers will be handed off to partners.", tourWithAgentType: 1, name: "CONNECT_REFUND_REDFIN_TOUR", displayName: "CONNECT_REFUND_REDFIN_TOUR" } 
		,17: { buyWithAgentType: 2, id: 17, defaultMessage: "We are redirecting Redfin demand below Direct minimum price to our partners.", tourWithAgentType: 2, name: "CONNECT_BELOW_DIRECT_MIN_PRICE", displayName: "CONNECT_BELOW_DIRECT_MIN_PRICE" } 
		,18: { buyWithAgentType: null, id: 18, defaultMessage: "Below Direct minimum price but customer has Redfin agent.", tourWithAgentType: null, name: "REDFIN_AGENT_BELOW_DIRECT_MIN_PRICE", displayName: "REDFIN_AGENT_BELOW_DIRECT_MIN_PRICE" } 
		,19: { buyWithAgentType: 2, id: 19, defaultMessage: "Conversion Experiment: we are showing a random Connect agent.", tourWithAgentType: 2, name: "CONNECT_RANDOM_AGENT_CHOICE_EXPERIMENT", displayName: "CONNECT_RANDOM_AGENT_CHOICE_EXPERIMENT" } 
		,20: { buyWithAgentType: 1, id: 20, defaultMessage: "We are directing the user to choose between direct and partner agents, showing recommended agent.", tourWithAgentType: 1, name: "BLENDED_REDFIN_CONNECT", displayName: "BLENDED_REDFIN_CONNECT" } 
		,21: { buyWithAgentType: 2, id: 21, defaultMessage: "Conversion Experiment: we are directing the user to choose between partner agents, showing recommended agent.", tourWithAgentType: 2, name: "CONNECT_RECOMMENDED_AGENT_CHOICE_EXPERIMENT", displayName: "CONNECT_RECOMMENDED_AGENT_CHOICE_EXPERIMENT" } 
		,22: { buyWithAgentType: 1, id: 22, defaultMessage: "We are showing the user their soft assigned, preferred Redfin agent.", tourWithAgentType: 1, name: "REDFIN_DIRECT_PREFERRED_AGENT", displayName: "REDFIN_DIRECT_PREFERRED_AGENT" } 
		,23: { buyWithAgentType: 1, id: 23, defaultMessage: "We are showing the user their pending or hard assigned Redfin agent.", tourWithAgentType: 1, name: "REDFIN_DIRECT_ASSIGNED_AGENT", displayName: "REDFIN_DIRECT_ASSIGNED_AGENT" } 
		,24: { buyWithAgentType: 2, id: 24, defaultMessage: "We are directing the user to our partner agents.", tourWithAgentType: 2, name: "CONNECT_SHORT_SALE", displayName: "CONNECT_SHORT_SALE" } 
		,25: { buyWithAgentType: 1, id: 25, defaultMessage: "We are directing the user to our direct agents.", tourWithAgentType: 1, name: "REDFIN_DIRECT_SHORT_SALE", displayName: "REDFIN_DIRECT_SHORT_SALE" } 
		,26: { buyWithAgentType: 1, id: 26, defaultMessage: "We are directing the user to choose between direct and partner agents, showing recommended agent.", tourWithAgentType: 1, name: "BLENDED_REDFIN_CONNECT_SHORT_SALE", displayName: "BLENDED_REDFIN_CONNECT_SHORT_SALE" } 
		,27: { buyWithAgentType: 2, id: 27, defaultMessage: "We are showing the user their assigned Connect agent.", tourWithAgentType: 2, name: "CONNECT_ASSIGNED_AGENT", displayName: "CONNECT_ASSIGNED_AGENT" } 
		,28: { buyWithAgentType: 1, id: 28, defaultMessage: "We are directing the user to our direct high-end agents.", tourWithAgentType: 1, name: "REDFIN_DIRECT_HIGH_END", displayName: "REDFIN_DIRECT_HIGH_END" } 
		,29: { buyWithAgentType: 1, id: 29, defaultMessage: "We are directing the user to our direct high-end agents.", tourWithAgentType: 1, name: "REDFIN_DIRECT_HIGH_END_SHORT_SALE", displayName: "REDFIN_DIRECT_HIGH_END_SHORT_SALE" } 
	} 
}; 
var g_servicePolicy = { 
	BELOW_CONNECT_MIN_PRICE: 0 
	,BANK_OWNED: 2 
	,OUT_OF_AREA: 3 
	,NOT_FOR_SALE: 4 
	,PROPERTY_TYPE_NOT_SERVICED: 5 
	,FSBO: 6 
	,UNSUPPORTED_SHORT_SALE: 7 
	,BELOW_DIRECT_MIN_PRICE: 8 
	,CONNECT_AREA_REDFIN_AGENT: 9 
	,NOT_MLS: 10 
	,OUT_OF_SERVICE: 11 
	,UNPOSSIBLE: 12 
	,CONNECT: 13 
	,REDFIN_DIRECT: 14 
	,CONNECT_OVERFLOW: 15 
	,CONNECT_REFUND_REDFIN_TOUR: 16 
	,CONNECT_BELOW_DIRECT_MIN_PRICE: 17 
	,REDFIN_AGENT_BELOW_DIRECT_MIN_PRICE: 18 
	,CONNECT_RANDOM_AGENT_CHOICE_EXPERIMENT: 19 
	,BLENDED_REDFIN_CONNECT: 20 
	,CONNECT_RECOMMENDED_AGENT_CHOICE_EXPERIMENT: 21 
	,REDFIN_DIRECT_PREFERRED_AGENT: 22 
	,REDFIN_DIRECT_ASSIGNED_AGENT: 23 
	,CONNECT_SHORT_SALE: 24 
	,REDFIN_DIRECT_SHORT_SALE: 25 
	,BLENDED_REDFIN_CONNECT_SHORT_SALE: 26 
	,CONNECT_ASSIGNED_AGENT: 27 
	,REDFIN_DIRECT_HIGH_END: 28 
	,REDFIN_DIRECT_HIGH_END_SHORT_SALE: 29 
	,idToObj: { 
		0: { buyWithAgentType: null, id: 0, defaultMessage: "Below Partner minimum price", tourWithAgentType: null, name: "BELOW_CONNECT_MIN_PRICE", displayName: "BELOW_CONNECT_MIN_PRICE" } 
		,2: { buyWithAgentType: null, id: 2, defaultMessage: "This foreclosed home is not currently for sale.", tourWithAgentType: null, name: "BANK_OWNED", displayName: "BANK_OWNED" } 
		,3: { buyWithAgentType: null, id: 3, defaultMessage: "The listing is not in our service area.", tourWithAgentType: null, name: "OUT_OF_AREA", displayName: "OUT_OF_AREA" } 
		,4: { buyWithAgentType: null, id: 4, defaultMessage: "The property is not for sale.", tourWithAgentType: null, name: "NOT_FOR_SALE", displayName: "NOT_FOR_SALE" } 
		,5: { buyWithAgentType: null, id: 5, defaultMessage: "We don't currently offer tours for Multi-Family with 5 or more units, Land, Timeshares, Ranches, Parking, Moorage, and Mobile Homes.", tourWithAgentType: null, name: "PROPERTY_TYPE_NOT_SERVICED", displayName: "PROPERTY_TYPE_NOT_SERVICED" } 
		,6: { buyWithAgentType: null, id: 6, defaultMessage: "We don't currently offer tours for FSBO properties.", tourWithAgentType: null, name: "FSBO", displayName: "FSBO" } 
		,7: { buyWithAgentType: null, id: 7, defaultMessage: "We don't currently offer tours for Short Sales.", tourWithAgentType: null, name: "UNSUPPORTED_SHORT_SALE", displayName: "UNSUPPORTED_SHORT_SALE" } 
		,8: { buyWithAgentType: null, id: 8, defaultMessage: "Below Direct minimum price", tourWithAgentType: null, name: "BELOW_DIRECT_MIN_PRICE", displayName: "BELOW_DIRECT_MIN_PRICE" } 
		,9: { buyWithAgentType: null, id: 9, defaultMessage: "Property is in partner area but customer has Redfin agent", tourWithAgentType: null, name: "CONNECT_AREA_REDFIN_AGENT", displayName: "CONNECT_AREA_REDFIN_AGENT" } 
		,10: { buyWithAgentType: null, id: 10, defaultMessage: "We don't currently offer tours for non-MLS listed properties.", tourWithAgentType: null, name: "NOT_MLS", displayName: "NOT_MLS" } 
		,11: { buyWithAgentType: null, id: 11, defaultMessage: "Currently do not have Connect capacity to service the listing. This only happens in Connect regions.", tourWithAgentType: null, name: "OUT_OF_SERVICE", displayName: "OUT_OF_SERVICE" } 
		,12: { buyWithAgentType: 1, id: 12, defaultMessage: "We don't have capacity, but we're not going to block demand.", tourWithAgentType: 1, name: "UNPOSSIBLE", displayName: "UNPOSSIBLE" } 
		,13: { buyWithAgentType: 2, id: 13, defaultMessage: "We are directing the user to our partner agents.", tourWithAgentType: 2, name: "CONNECT", displayName: "CONNECT" } 
		,14: { buyWithAgentType: 1, id: 14, defaultMessage: "We are directing the user to our direct agents.", tourWithAgentType: 1, name: "REDFIN_DIRECT", displayName: "REDFIN_DIRECT" } 
		,15: { buyWithAgentType: 2, id: 15, defaultMessage: "We are redirecting Redfin demand to our partner agents.", tourWithAgentType: 2, name: "CONNECT_OVERFLOW", displayName: "CONNECT_OVERFLOW" } 
		,16: { buyWithAgentType: 2, id: 16, defaultMessage: "Redfin will tour the customer, but offers will be handed off to partners.", tourWithAgentType: 1, name: "CONNECT_REFUND_REDFIN_TOUR", displayName: "CONNECT_REFUND_REDFIN_TOUR" } 
		,17: { buyWithAgentType: 2, id: 17, defaultMessage: "We are redirecting Redfin demand below Direct minimum price to our partners.", tourWithAgentType: 2, name: "CONNECT_BELOW_DIRECT_MIN_PRICE", displayName: "CONNECT_BELOW_DIRECT_MIN_PRICE" } 
		,18: { buyWithAgentType: null, id: 18, defaultMessage: "Below Direct minimum price but customer has Redfin agent.", tourWithAgentType: null, name: "REDFIN_AGENT_BELOW_DIRECT_MIN_PRICE", displayName: "REDFIN_AGENT_BELOW_DIRECT_MIN_PRICE" } 
		,19: { buyWithAgentType: 2, id: 19, defaultMessage: "Conversion Experiment: we are showing a random Connect agent.", tourWithAgentType: 2, name: "CONNECT_RANDOM_AGENT_CHOICE_EXPERIMENT", displayName: "CONNECT_RANDOM_AGENT_CHOICE_EXPERIMENT" } 
		,20: { buyWithAgentType: 1, id: 20, defaultMessage: "We are directing the user to choose between direct and partner agents, showing recommended agent.", tourWithAgentType: 1, name: "BLENDED_REDFIN_CONNECT", displayName: "BLENDED_REDFIN_CONNECT" } 
		,21: { buyWithAgentType: 2, id: 21, defaultMessage: "Conversion Experiment: we are directing the user to choose between partner agents, showing recommended agent.", tourWithAgentType: 2, name: "CONNECT_RECOMMENDED_AGENT_CHOICE_EXPERIMENT", displayName: "CONNECT_RECOMMENDED_AGENT_CHOICE_EXPERIMENT" } 
		,22: { buyWithAgentType: 1, id: 22, defaultMessage: "We are showing the user their soft assigned, preferred Redfin agent.", tourWithAgentType: 1, name: "REDFIN_DIRECT_PREFERRED_AGENT", displayName: "REDFIN_DIRECT_PREFERRED_AGENT" } 
		,23: { buyWithAgentType: 1, id: 23, defaultMessage: "We are showing the user their pending or hard assigned Redfin agent.", tourWithAgentType: 1, name: "REDFIN_DIRECT_ASSIGNED_AGENT", displayName: "REDFIN_DIRECT_ASSIGNED_AGENT" } 
		,24: { buyWithAgentType: 2, id: 24, defaultMessage: "We are directing the user to our partner agents.", tourWithAgentType: 2, name: "CONNECT_SHORT_SALE", displayName: "CONNECT_SHORT_SALE" } 
		,25: { buyWithAgentType: 1, id: 25, defaultMessage: "We are directing the user to our direct agents.", tourWithAgentType: 1, name: "REDFIN_DIRECT_SHORT_SALE", displayName: "REDFIN_DIRECT_SHORT_SALE" } 
		,26: { buyWithAgentType: 1, id: 26, defaultMessage: "We are directing the user to choose between direct and partner agents, showing recommended agent.", tourWithAgentType: 1, name: "BLENDED_REDFIN_CONNECT_SHORT_SALE", displayName: "BLENDED_REDFIN_CONNECT_SHORT_SALE" } 
		,27: { buyWithAgentType: 2, id: 27, defaultMessage: "We are showing the user their assigned Connect agent.", tourWithAgentType: 2, name: "CONNECT_ASSIGNED_AGENT", displayName: "CONNECT_ASSIGNED_AGENT" } 
		,28: { buyWithAgentType: 1, id: 28, defaultMessage: "We are directing the user to our direct high-end agents.", tourWithAgentType: 1, name: "REDFIN_DIRECT_HIGH_END", displayName: "REDFIN_DIRECT_HIGH_END" } 
		,29: { buyWithAgentType: 1, id: 29, defaultMessage: "We are directing the user to our direct high-end agents.", tourWithAgentType: 1, name: "REDFIN_DIRECT_HIGH_END_SHORT_SALE", displayName: "REDFIN_DIRECT_HIGH_END_SHORT_SALE" } 
	} 
}; 
var g_serviceProviderCategory = { 
	realEstateTransaction: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "realEstateTransaction", microdataType: "LocalBusiness", priorityForOwners: 0, urlName: "real-estate-transaction", friendlyName: "Real Estate Transaction", parent: null, priorityForSellers: 0, displayName: "realEstateTransaction" } 
	,appraisal: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 3, name: "appraisal", microdataType: "ProfessionalService", priorityForOwners: 3, urlName: "appraisal", friendlyName: "Appraisal", parent: "realEstateTransaction", priorityForSellers: 2, displayName: "appraisal" } 
	,attorney: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 5, name: "attorney", microdataType: "Attorney", priorityForOwners: 2, urlName: "real-estate-lawyer", friendlyName: "Attorney", parent: "realEstateTransaction", priorityForSellers: 4, displayName: "attorney" } 
	,escrow: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 5, name: "escrow", microdataType: "ProfessionalService", priorityForOwners: 2, urlName: "escrow", friendlyName: "Escrow", parent: "realEstateTransaction", priorityForSellers: 4, displayName: "escrow" } 
	,floorPlanDrawing: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 0, name: "floorPlanDrawing", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 2, urlName: "floor-plan-designer", friendlyName: "Floor Plan Drawing", parent: "realEstateTransaction", priorityForSellers: 3, displayName: "floorPlanDrawing" } 
	,homeownersInsurance: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 4, name: "homeownersInsurance", microdataType: "InsuranceAgency", priorityForOwners: 0, urlName: "home-insurance", friendlyName: "Home Owners Insurance", parent: "realEstateTransaction", priorityForSellers: 3, displayName: "homeownersInsurance" } 
	,homeWarranty: { displayStyle: "company", exclusiveCustomerType: "buyer", priorityForBuyers: 3, name: "homeWarranty", microdataType: "FinancialService", priorityForOwners: 2, urlName: "home-warranty", friendlyName: "Home Warranty", parent: "realEstateTransaction", priorityForSellers: 0, displayName: "homeWarranty" } 
	,inspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 0, name: "inspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 0, urlName: "inspection", friendlyName: "Inspection", parent: "realEstateTransaction", priorityForSellers: 0, displayName: "inspection" } 
	,airQualityInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 2, name: "airQualityInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 2, urlName: "air-quality-inspection", friendlyName: "Air Quality Inspection", parent: "inspection", priorityForSellers: 2, displayName: "airQualityInspection" } 
	,asbestosInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 3, name: "asbestosInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "asbestos-inspection", friendlyName: "Asbestos Inspection", parent: "inspection", priorityForSellers: 3, displayName: "asbestosInspection" } 
	,drywallInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 2, name: "drywallInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 2, urlName: "drywall-inspection", friendlyName: "Drywall Inspection", parent: "inspection", priorityForSellers: 2, displayName: "drywallInspection" } 
	,homeInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 5, name: "homeInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 0, urlName: "home-inspection", friendlyName: "Home Inspection", parent: "inspection", priorityForSellers: 3, displayName: "homeInspection" } 
	,leadInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 3, name: "leadInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "lead-inspection", friendlyName: "Lead Inspection", parent: "inspection", priorityForSellers: 0, displayName: "leadInspection" } 
	,moldInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 3, name: "moldInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "mold-inspection", friendlyName: "Mold Inspection", parent: "inspection", priorityForSellers: 3, displayName: "moldInspection" } 
	,pestInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 4, name: "pestInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "pest-inspection", friendlyName: "Pest Inspection", parent: "inspection", priorityForSellers: 2, displayName: "pestInspection" } 
	,radonInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 3, name: "radonInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 0, urlName: "radon-inspection", friendlyName: "Radon Inspection", parent: "inspection", priorityForSellers: 3, displayName: "radonInspection" } 
	,retrofitInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 3, name: "retrofitInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "retrofit-inspection", friendlyName: "Retrofit Inspection", parent: "inspection", priorityForSellers: 3, displayName: "retrofitInspection" } 
	,septicInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 3, name: "septicInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "septic-inspection", friendlyName: "Septic Inspection", parent: "inspection", priorityForSellers: 4, displayName: "septicInspection" } 
	,sewerInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 3, name: "sewerInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "sewer-inspection", friendlyName: "Sewer Inspection", parent: "inspection", priorityForSellers: 3, displayName: "sewerInspection" } 
	,waterInspection: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 3, name: "waterInspection", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "water-inspection", friendlyName: "Water Inspection", parent: "inspection", priorityForSellers: 3, displayName: "waterInspection" } 
	,lending: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 5, name: "lending", microdataType: "FinancialService", priorityForOwners: 3, urlName: "home-loans", friendlyName: "Lending", parent: "realEstateTransaction", priorityForSellers: 2, displayName: "lending" } 
	,brokerLending: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 5, name: "brokerLending", microdataType: "FinancialService", priorityForOwners: 3, urlName: "mortgage-broker", friendlyName: "Broker Lending", parent: "lending", priorityForSellers: 2, displayName: "brokerLending" } 
	,correspondantLending: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 5, name: "correspondantLending", microdataType: "FinancialService", priorityForOwners: 3, urlName: "correspondent-lender", friendlyName: "Correspondent Lending", parent: "lending", priorityForSellers: 2, displayName: "correspondantLending" } 
	,directLending: { displayStyle: "person", exclusiveCustomerType: "buyer", priorityForBuyers: 5, name: "directLending", microdataType: "FinancialService", priorityForOwners: 3, urlName: "direct-lender", friendlyName: "Direct Lending", parent: "lending", priorityForSellers: 2, displayName: "directLending" } 
	,photography: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 0, name: "photography", microdataType: "LocalBusiness", priorityForOwners: 0, urlName: "home-photography", friendlyName: "Photography", parent: "realEstateTransaction", priorityForSellers: 5, displayName: "photography" } 
	,realEstateAgent: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 5, name: "realEstateAgent", microdataType: "RealEstateAgent", priorityForOwners: 2, urlName: "agents", friendlyName: "Real Estate Agent", parent: "realEstateTransaction", priorityForSellers: 5, displayName: "realEstateAgent" } 
	,staging: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 0, name: "staging", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 0, urlName: "staging", friendlyName: "Staging", parent: "realEstateTransaction", priorityForSellers: 5, displayName: "staging" } 
	,title: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 5, name: "title", microdataType: "ProfessionalService", priorityForOwners: 2, urlName: "title-company", friendlyName: "Title", parent: "realEstateTransaction", priorityForSellers: 4, displayName: "title" } 
	,buildingAndRemodeling: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "buildingAndRemodeling", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 0, urlName: "remodeling", friendlyName: "Building and Remodeling", parent: null, priorityForSellers: 0, displayName: "buildingAndRemodeling" } 
	,architecture: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 2, name: "architecture", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "architect", friendlyName: "Architecture", parent: "buildingAndRemodeling", priorityForSellers: 2, displayName: "architecture" } 
	,building: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 4, name: "building", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 2, urlName: "builder", friendlyName: "Building", parent: "buildingAndRemodeling", priorityForSellers: 0, displayName: "building" } 
	,contractor: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 4, name: "contractor", microdataType: "GeneralContractor", priorityForOwners: 5, urlName: "contractor", friendlyName: "Contractor", parent: "buildingAndRemodeling", priorityForSellers: 4, displayName: "contractor" } 
	,environmental: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 3, name: "environmental", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "environmental-services", friendlyName: "Environmental", parent: "buildingAndRemodeling", priorityForSellers: 3, displayName: "environmental" } 
	,foundationRepair: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 2, name: "foundationRepair", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "foundation-repair", friendlyName: "Foundation Repair", parent: "buildingAndRemodeling", priorityForSellers: 3, displayName: "foundationRepair" } 
	,geologicalAndGeotechnical: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 3, name: "geologicalAndGeotechnical", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "geological-services", friendlyName: "Geological and Geotechnical", parent: "buildingAndRemodeling", priorityForSellers: 3, displayName: "geologicalAndGeotechnical" } 
	,handyman: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 1, name: "handyman", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 5, urlName: "handyman", friendlyName: "Handyman", parent: "buildingAndRemodeling", priorityForSellers: 5, displayName: "handyman" } 
	,junkRemoval: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "junkRemoval", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "junk-removal", friendlyName: "Junk Removal", parent: "buildingAndRemodeling", priorityForSellers: 4, displayName: "junkRemoval" } 
	,structuralEngineering: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 3, name: "structuralEngineering", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "structural-engineer", friendlyName: "Structural Engineering", parent: "buildingAndRemodeling", priorityForSellers: 3, displayName: "structuralEngineering" } 
	,surveying: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "surveying", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "surveyor", friendlyName: "Surveying", parent: "buildingAndRemodeling", priorityForSellers: 3, displayName: "surveying" } 
	,indoor: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "indoor", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 0, urlName: "indoor-services", friendlyName: "Indoor", parent: null, priorityForSellers: 0, displayName: "indoor" } 
	,asbestosRemoval: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 2, name: "asbestosRemoval", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "asbestos-removal", friendlyName: "Asbestos Removal", parent: "indoor", priorityForSellers: 3, displayName: "asbestosRemoval" } 
	,asbestosTesting: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 3, name: "asbestosTesting", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "asbestos-testing", friendlyName: "Asbestos Testing", parent: "indoor", priorityForSellers: 3, displayName: "asbestosTesting" } 
	,basementWaterproofing: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 2, name: "basementWaterproofing", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "basement-waterproofing", friendlyName: "Basement Waterproofing", parent: "indoor", priorityForSellers: 3, displayName: "basementWaterproofing" } 
	,carpet: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 1, name: "carpet", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "carpet-install", friendlyName: "Carpet", parent: "indoor", priorityForSellers: 3, displayName: "carpet" } 
	,centralVacuum: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "centralVacuum", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 0, urlName: "central-vacuum", friendlyName: "Central Vacuum", parent: "indoor", priorityForSellers: 0, displayName: "centralVacuum" } 
	,drywallRepair: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "drywallRepair", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "drywall-repair", friendlyName: "Drywall Repair", parent: "indoor", priorityForSellers: 3, displayName: "drywallRepair" } 
	,ductworkCleaning: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "ductworkCleaning", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "duct-cleaner", friendlyName: "Ductwork Cleaning", parent: "indoor", priorityForSellers: 3, displayName: "ductworkCleaning" } 
	,electric: { displayStyle: "person", exclusiveCustomerType: null, priorityForBuyers: 3, name: "electric", microdataType: "Electrician", priorityForOwners: 4, urlName: "electrician", friendlyName: "Electric", parent: "indoor", priorityForSellers: 4, displayName: "electric" } 
	,hardwoodFlooring: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 1, name: "hardwoodFlooring", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "hardwood-floors", friendlyName: "Hardwood Flooring", parent: "indoor", priorityForSellers: 3, displayName: "hardwoodFlooring" } 
	,houseCleaning: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "houseCleaning", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "house-cleaning", friendlyName: "House Cleaning", parent: "indoor", priorityForSellers: 4, displayName: "houseCleaning" } 
	,hvacTech: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 2, name: "hvacTech", microdataType: "HVACBusiness", priorityForOwners: 4, urlName: "hvac", friendlyName: "HVAC Tech", parent: "indoor", priorityForSellers: 4, displayName: "hvacTech" } 
	,plumbing: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 3, name: "plumbing", microdataType: "Plumber", priorityForOwners: 4, urlName: "plumber", friendlyName: "Plumbing", parent: "indoor", priorityForSellers: 4, displayName: "plumbing" } 
	,securitySystem: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "securitySystem", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "home-security", friendlyName: "Security System", parent: "indoor", priorityForSellers: 0, displayName: "securitySystem" } 
	,septic: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 3, name: "septic", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "septic-systems", friendlyName: "Septic", parent: "indoor", priorityForSellers: 4, displayName: "septic" } 
	,sewer: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 3, name: "sewer", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "sewer-systems", friendlyName: "Sewer", parent: "indoor", priorityForSellers: 4, displayName: "sewer" } 
	,exteriorAndOutdoor: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "exteriorAndOutdoor", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 0, urlName: "exterior-services", friendlyName: "Exterior and Outdoor", parent: null, priorityForSellers: 0, displayName: "exteriorAndOutdoor" } 
	,chimney: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 4, name: "chimney", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "chimney-repair", friendlyName: "Chimney", parent: "exteriorAndOutdoor", priorityForSellers: 4, displayName: "chimney" } 
	,deck: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 4, name: "deck", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "deck-repair", friendlyName: "Deck", parent: "exteriorAndOutdoor", priorityForSellers: 4, displayName: "deck" } 
	,door: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 4, name: "door", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "door-install", friendlyName: "Door", parent: "exteriorAndOutdoor", priorityForSellers: 4, displayName: "door" } 
	,fence: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "fence", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "fence-install", friendlyName: "Fence", parent: "exteriorAndOutdoor", priorityForSellers: 3, displayName: "fence" } 
	,landscaping: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 2, name: "landscaping", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "landscaper", friendlyName: "Landscaping", parent: "exteriorAndOutdoor", priorityForSellers: 5, displayName: "landscaping" } 
	,pool: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 3, name: "pool", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "pool-services", friendlyName: "Pool", parent: "exteriorAndOutdoor", priorityForSellers: 3, displayName: "pool" } 
	,roof: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 4, name: "roof", microdataType: "RoofingContractor", priorityForOwners: 4, urlName: "roofer", friendlyName: "Roof", parent: "exteriorAndOutdoor", priorityForSellers: 4, displayName: "roof" } 
	,tree: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 2, name: "tree", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 3, urlName: "tree-service", friendlyName: "Tree", parent: "exteriorAndOutdoor", priorityForSellers: 3, displayName: "tree" } 
	,window: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 4, name: "window", microdataType: "HomeAndConstructionBusiness", priorityForOwners: 4, urlName: "window-install", friendlyName: "Window", parent: "exteriorAndOutdoor", priorityForSellers: 4, displayName: "window" } 
	,other: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 0, name: "other", microdataType: "LocalBusiness", priorityForOwners: 0, urlName: "other-services", friendlyName: "Other", parent: null, priorityForSellers: 0, displayName: "other" } 
	,locksmith: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 3, name: "locksmith", microdataType: "Locksmith", priorityForOwners: 3, urlName: "locksmith", friendlyName: "Locksmith", parent: "other", priorityForSellers: 3, displayName: "locksmith" } 
	,moving: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 5, name: "moving", microdataType: "MovingCompany", priorityForOwners: 0, urlName: "mover", friendlyName: "Moving", parent: "other", priorityForSellers: 5, displayName: "moving" } 
	,painting: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 2, name: "painting", microdataType: "HousePainter", priorityForOwners: 3, urlName: "house-painter", friendlyName: "Painting", parent: "other", priorityForSellers: 5, displayName: "painting" } 
	,pestControl: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 3, name: "pestControl", microdataType: "LocalBusiness", priorityForOwners: 4, urlName: "pest-control", friendlyName: "Pest Control", parent: "other", priorityForSellers: 4, displayName: "pestControl" } 
	,storage: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 3, name: "storage", microdataType: "SelfStorage", priorityForOwners: 3, urlName: "storage-services", friendlyName: "Storage", parent: "other", priorityForSellers: 4, displayName: "storage" } 
	,winterizing: { displayStyle: "company", exclusiveCustomerType: null, priorityForBuyers: 2, name: "winterizing", microdataType: "null", priorityForOwners: 3, urlName: "winterizing", friendlyName: "Winterizing", parent: "other", priorityForSellers: 4, displayName: "winterizing" } 
}; 
var g_serviceRegionTypes = { 
	REDFIN: 2 
	,CONNECT_ONLY: 3 
	,idToObj: { 
		2: { id: 2, description: "This service region is serviced by Redfin agents, but can be overflowed to Connect", name: "REDFIN", dfpName: "Redfin", isServicedByRedfin: true, displayName: "Redfin" } 
		,3: { id: 3, description: "This service region is serviced ONLY by Connect agents", name: "CONNECT_ONLY", dfpName: "Connect", isServicedByRedfin: false, displayName: "Connect" } 
	} 
}; 
var g_sourceAndForeclosureStatuses = { 
	MLS_NON_FORECLOSURE: 1 
	,MLS_FORECLOSURE: 2 
	,FOR_SALE_BY_OWNER: 3 
	,BANK_OWNED: 4 
	,NEW_CONSTRUCTION: 5 
	,idToObj: { 
		1: { textDesc: "MLS listings", id: 1, listingType: 1, name: "MLS_NON_FORECLOSURE", foreclosureStatus: false, displayName: "MLS_NON_FORECLOSURE" } 
		,2: { textDesc: "MLS-listed foreclosures", id: 2, listingType: 1, name: "MLS_FORECLOSURE", foreclosureStatus: true, displayName: "MLS_FORECLOSURE" } 
		,3: { textDesc: "For-sale-by-owner listings", id: 3, listingType: 2, name: "FOR_SALE_BY_OWNER", foreclosureStatus: null, displayName: "FOR_SALE_BY_OWNER" } 
		,4: { textDesc: "Foreclosed homes", id: 4, listingType: 3, name: "BANK_OWNED", foreclosureStatus: null, displayName: "BANK_OWNED" } 
		,5: { textDesc: "New Construction Homes", id: 5, listingType: 4, name: "NEW_CONSTRUCTION", foreclosureStatus: false, displayName: "NEW_CONSTRUCTION" } 
	} 
}; 
var g_sundaySkyVideoType = { 
	DEFAULT: 1 
	,NO_REDFIN: 2 
	,idToObj: { 
		1: { id: 1, desc: "Default", name: "DEFAULT", displayName: "DEFAULT" } 
		,2: { id: 2, desc: "noRedfin", name: "NO_REDFIN", displayName: "NO_REDFIN" } 
	} 
}; 
var g_surveyQuestionnaire = { 
	REDFIN_AGENT_NPS: 1 
	,REDFIN_TOUR_COMPLETED: 2 
	,REDFIN_INACTIVE: 3 
	,PARTNER_AGENT_NPS: 4 
	,PARTNER_30DAY_CHECKIN: 5 
	,PARTNER_24HOUR_CHECKIN: 6 
	,PARTNER_INACTIVE: 7 
	,SERVICE_PROVIDER_NPS: 8 
	,REDFIN_AGENT_NPS_WITH_INFLUENCE: 9 
	,idToObj: { 
		1: { id: 1, name: "REDFIN_AGENT_NPS", displayName: "REDFIN_AGENT_NPS" } 
		,2: { id: 2, name: "REDFIN_TOUR_COMPLETED", displayName: "REDFIN_TOUR_COMPLETED" } 
		,3: { id: 3, name: "REDFIN_INACTIVE", displayName: "REDFIN_INACTIVE" } 
		,4: { id: 4, name: "PARTNER_AGENT_NPS", displayName: "PARTNER_AGENT_NPS" } 
		,5: { id: 5, name: "PARTNER_30DAY_CHECKIN", displayName: "PARTNER_30DAY_CHECKIN" } 
		,6: { id: 6, name: "PARTNER_24HOUR_CHECKIN", displayName: "PARTNER_24HOUR_CHECKIN" } 
		,7: { id: 7, name: "PARTNER_INACTIVE", displayName: "PARTNER_INACTIVE" } 
		,8: { id: 8, name: "SERVICE_PROVIDER_NPS", displayName: "SERVICE_PROVIDER_NPS" } 
		,9: { id: 9, name: "REDFIN_AGENT_NPS_WITH_INFLUENCE", displayName: "REDFIN_AGENT_NPS_WITH_INFLUENCE" } 
	} 
}; 
var g_tourAppointmentStatus = { 
	SCHEDULED: 2 
	,COMPLETED: 3 
	,CANCELLED: 4 
	,CANCELLED_WITHOUT_PAY: 5 
	,idToObj: { 
		2: { id: 2, name: "SCHEDULED", displayName: "Scheduled" } 
		,3: { id: 3, name: "COMPLETED", displayName: "Completed" } 
		,4: { id: 4, name: "CANCELLED", displayName: "Cancelled With Pay" } 
		,5: { id: 5, name: "CANCELLED_WITHOUT_PAY", displayName: "Cancelled Without Pay" } 
	} 
}; 
var g_tourStatus = { 
	SUBMITTED: 1 
	,SCHEDULED: 2 
	,COMPLETED: 3 
	,CANCELLED: 4 
	,FIRST_CALL: 5 
	,SECOND_CALL: 6 
	,COMMUNICATING: 7 
	,READY_TO_SCHEDULE: 8 
	,ON_HOLD: 9 
	,WAITING_PREAPPROVAL: 10 
	,ESCALATED: 11 
	,AWAITING_CAPACITY: 12 
	,WAITING_FOR_ID: 13 
	,idToObj: { 
		1: { id: 1, isSubmitted: true, name: "SUBMITTED", displayOrder: 1, sfPicklistValue: "New", isClientCancellable: true, displayValue: "New", isClosed: false, displayName: "New" } 
		,2: { id: 2, isSubmitted: false, name: "SCHEDULED", displayOrder: 6, sfPicklistValue: "Tour Scheduled", isClientCancellable: false, displayValue: "Scheduled", isClosed: false, displayName: "Scheduled" } 
		,3: { id: 3, isSubmitted: false, name: "COMPLETED", displayOrder: 7, sfPicklistValue: "Closed", isClientCancellable: false, displayValue: "Completed", isClosed: true, displayName: "Completed" } 
		,4: { id: 4, isSubmitted: false, name: "CANCELLED", displayOrder: 8, sfPicklistValue: "Closed", isClientCancellable: false, displayValue: "Cancelled", isClosed: true, displayName: "Cancelled" } 
		,5: { id: 5, isSubmitted: true, name: "FIRST_CALL", displayOrder: 2, sfPicklistValue: "First call, no contact", isClientCancellable: true, displayValue: "First call, no contact", isClosed: false, displayName: "First call, no contact" } 
		,6: { id: 6, isSubmitted: true, name: "SECOND_CALL", displayOrder: 3, sfPicklistValue: "Second call, no contact", isClientCancellable: true, displayValue: "Second call, no contact", isClosed: false, displayName: "Second call, no contact" } 
		,7: { id: 7, isSubmitted: true, name: "COMMUNICATING", displayOrder: 4, sfPicklistValue: "Communicating With Client", isClientCancellable: false, displayValue: "Communicating with client", isClosed: false, displayName: "Communicating with client" } 
		,8: { id: 8, isSubmitted: true, name: "READY_TO_SCHEDULE", displayOrder: 5, sfPicklistValue: "Ready to schedule", isClientCancellable: false, displayValue: "Ready to schedule", isClosed: false, displayName: "Ready to schedule" } 
		,9: { id: 9, isSubmitted: true, name: "ON_HOLD", displayOrder: 9, sfPicklistValue: "On Hold", isClientCancellable: false, displayValue: "On hold", isClosed: false, displayName: "On hold" } 
		,10: { id: 10, isSubmitted: true, name: "WAITING_PREAPPROVAL", displayOrder: 11, sfPicklistValue: "Waiting on Pre-Approval", isClientCancellable: false, displayValue: "Waiting for prepproval", isClosed: false, displayName: "Waiting for prepproval" } 
		,11: { id: 11, isSubmitted: true, name: "ESCALATED", displayOrder: 12, sfPicklistValue: "Escalated", isClientCancellable: false, displayValue: "Escalated", isClosed: false, displayName: "Escalated" } 
		,12: { id: 12, isSubmitted: true, name: "AWAITING_CAPACITY", displayOrder: 13, sfPicklistValue: "Awaiting Capacity", isClientCancellable: false, displayValue: "Awaiting Capacity", isClosed: false, displayName: "Awaiting Capacity" } 
		,13: { id: 13, isSubmitted: true, name: "WAITING_FOR_ID", displayOrder: 10, sfPicklistValue: "Waiting for ID", isClientCancellable: false, displayValue: "Waiting for ID", isClosed: false, displayName: "Waiting for ID" } 
	} 
}; 
var g_uiPropertyTypes = { 
	HOUSE: 1 
	,CONDO: 2 
	,TOWNHOUSE: 3 
	,MULTI_FAMILY: 4 
	,LAND: 5 
	,OTHER: 6 
	,idToObj: { 
		1: { id: 1, displayLabel: "House", iconSuffix: "", name: "HOUSE", mappedPropertyTypes: [6], displayName: "HOUSE" } 
		,2: { id: 2, displayLabel: "Condo", iconSuffix: "condo", name: "CONDO", mappedPropertyTypes: [3], displayName: "CONDO" } 
		,3: { id: 3, displayLabel: "Townhouse", iconSuffix: "townhome", name: "TOWNHOUSE", mappedPropertyTypes: [13], displayName: "TOWNHOUSE" } 
		,4: { id: 4, displayLabel: "Multi-family", iconSuffix: "multi_family", name: "MULTI_FAMILY", mappedPropertyTypes: [4,5], displayName: "MULTI_FAMILY" } 
		,5: { id: 5, displayLabel: "Land", iconSuffix: "land", name: "LAND", mappedPropertyTypes: [8], displayName: "LAND" } 
		,6: { id: 6, displayLabel: "Other types", iconSuffix: "", name: "OTHER", mappedPropertyTypes: [10,12,2,11,7,9,1], displayName: "OTHER" } 
	} 
}; 
g_agentType = g_agentTypes; g_accessLevel = g_accessLevels; g_propertyType = g_propertyTypes; g_searchStatus = g_searchStatuses; g_agentType = g_agentTypes; 
var g_listingTypes = {
	MLS: 1,
	FSBO: 2,
	FORECLOSURE: 3,
	NEW_CONSTRUCTION: 4,
	idToName: {
		'1': 'MLS Listings',
		'2': 'for-sale-by-owner listings',
		'3': 'foreclosed homes',
		'4': 'new constructions'
	}
};
var g_defnshort_sale = {
   term: "Short Sale",
   brief: "A home that is listed for sale at a price lower than the amount owed on the mortgage. Homeowners hope to sell their home as a short sale to avoid penalties associated with going into foreclosure. ",
   slug: "short-sale",
   link: "/definition/short-sale"
};
var g_defntenancy_in_common = {
   term: "Tenancy in Common",
   brief: "An arrangement where two or more people, related or not, hold joint ownership of a home. ",
   slug: "tenancy-in-common",
   link: "/definition/tenancy-in-common"
};

