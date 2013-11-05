<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>DK Property search</title>
	<link rel="stylesheet" href="<?php echo base_url()?>css/BaseChrome.css" type="text/css">
	<link rel="stylesheet" href="<?php echo base_url()?>css/HomePage.profile.css" type="text/css">
    <link rel="icon" type="image/jpg" href="../images/favicon.png" />

</head>

<body>

    
    <div class="bg-banner" id="search">
			<div class="banner" id="banner">
				<div class="centerHelper">
					<div class="tagline desktop">
						<h1>Quick Home Search!</h1>
						<h2>Where our agents are paid to put you first.</h2>
					</div>
					<div class="bannerContent">
						
						<div class="homepageTabContainer">
							<div class="homepageTabs">
								  
									
									
								    	<h2 class="inline-block current centered split5050" id="homeSearchTabNode">Find a Home</h2><h2 class="inline-block clickable centered split5050" id="homeValueToolTabNode">Sell My Home</h2>
								    
								
							</div>
							<div class="tabContent">
								<div id="searchInputNode">
									
									
										
										<div id="enableMobileSearchLink" class="mobileEnabledSearchLink expanded">
											<h2>Find a Home</h2>
										</div>
										

										
						
									<form action="<?php echo base_url()?>search/find" name="location" id="HomeSearchWidget" class="HomeSearchWidget clear-fix mobile-search-enabled" method="post">
										<div class="location">
											
											<div class="sprite-icon-search"></div>
											
											<div class="dijit dijitReset dijitInline dijitLeft search-location dijitTextBox dijitComboBox LocationAutocomplete dijitValidationTextBox dijitTextBoxFocused dijitComboBoxFocused LocationAutocompleteFocused dijitValidationTextBoxFocused dijitFocused" id="widget_redfin_search_widget_LocationAutocompleteInputBox_0" role="combobox" widgetid="redfin_search_widget_LocationAutocompleteInputBox_0"><div class="dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer" data-dojo-attach-point="_buttonNode, _popupStateNode" role="presentation" style="display: none;"></div><div class="dijitReset dijitInputField dijitInputContainer"><input class="dijitReset dijitInputInner" name="location" type="text" autocomplete="off" data-dojo-attach-point="textbox,focusNode" role="textbox" aria-haspopup="true" tabindex="0" id="redfin_search_widget_LocationAutocompleteInputBox_0" aria-invalid="false" value="" placeholder="search by loaction eg Mombasa"></div></div>
											
											<input type="button" class="btn-clear-search-input" title="Clear">
											
											<input type="submit" name="wideSubmit" value="" title="Find Homes" tabindex="6" class="wideOnly Button primary large basic-border-radius clickable">
										</div>

										<div class="dropdowns">
											<div class="minPrice">
												<label for="min_price" class="thinOnly">Minimum Price</label>
												<label for="min_price" class="wideOnly">Price</label>
												<select name="minprice" tabindex="2" title="Minimum price">
													<option selected="selected" value="">No min</option>
													<option value="50000">50,000</option>
													<option value="75000">75,000</option>
													<option value="100000">100,000</option>
													<option value="125000">125,000</option>
													<option value="150000">150,000</option>
													<option value="175000">175,000</option>
													<option value="200000">200,000</option>
													<option value="225000">225,000</option>
										
													<option value="250000">250,000</option>
													<option value="275000">275,000</option>
													<option value="300000">300,000</option>
													<option value="325000">325,000</option>
													<option value="350000">350,000</option>
													<option value="375000">375,000</option>
										
													<option value="400000">400,000</option>
													<option value="425000">425,000</option>
													<option value="450000">450,000</option>
													<option value="475000">475,000</option>
													<option value="500000">500,000</option>
													<option value="550000">550,000</option>
										
													<option value="600000">600,000</option>
													<option value="650000">650,000</option>
													<option value="700000">700,000</option>
													<option value="750000">750,000</option>
													<option value="800000">800,000</option>
													<option value="850000">850,000</option>
										
													<option value="900000">900,000</option>
													<option value="950000">950,000</option>
													<option value="1000000">1,000,000</option>
													<option value="1250000">1,250,000</option>
													<option value="1500000">1,500,000</option>
													<option value="1750000">1,750,000</option>
										
													<option value="2000000">2,000,000</option>
													<option value="2250000">2,250,000</option>
													<option value="2500000">2,500,000</option>
													<option value="2750000">2,750,000</option>
													<option value="3000000">3,000,000</option>
													<option value="3250000">3,250,000</option>
										
													<option value="3500000">3,500,000</option>
													<option value="3750000">3,750,000</option>
													<option value="4000000">4,000,000</option>
													<option value="4250000">4,250,000</option>
													<option value="4500000">4,500,000</option>
													<option value="4750000">4,750,000</option>
										
													<option value="5000000">5,000,000</option>
													<option value="6000000">6,000,000</option>
													<option value="7000000">7,000,000</option>
													<option value="8000000">8,000,000</option>
													<option value="9000000">9,000,000</option>
													<option value="10000000">10,000,000</option>
													
													<option value="">No min</option>
												</select>
											</div>
										
											<div class="maxPrice">
												<label for="max_price" class="thinOnly">Maximum Price</label>
												<label for="max_price" class="wideOnly">to</label>
												<select name="maxprice" tabindex="3" title="Maximum price">
													<option selected="selected" value="">No max</option>
													<option value="50000">50,000</option>
													<option value="75000">75,000</option>
													<option value="100000">100,000</option>
													<option value="125000">125,000</option>
													<option value="150000">150,000</option>
													<option value="175000">175,000</option>
													<option value="200000">200,000</option>
													<option value="225000">225,000</option>
										
													<option value="250000">250,000</option>
													<option value="275000">275,000</option>
													<option value="300000">300,000</option>
													<option value="325000">325,000</option>
													<option value="350000">350,000</option>
													<option value="375000">375,000</option>
										
													<option value="400000">400,000</option>
													<option value="425000">425,000</option>
													<option value="450000">450,000</option>
													<option value="475000">475,000</option>
													<option value="500000">500,000</option>
													<option value="550000">550,000</option>
										
													<option value="600000">600,000</option>
													<option value="650000">650,000</option>
													<option value="700000">700,000</option>
													<option value="750000">750,000</option>
													<option value="800000">800,000</option>
													<option value="850000">850,000</option>
										
													<option value="900000">900,000</option>
													<option value="950000">950,000</option>
													<option value="1000000">1,000,000</option>
													<option value="1250000">1,250,000</option>
													<option value="1500000">1,500,000</option>
													<option value="1750000">1,750,000</option>
										
													<option value="2000000">2,000,000</option>
													<option value="2250000">2,250,000</option>
													<option value="2500000">2,500,000</option>
													<option value="2750000">2,750,000</option>
													<option value="3000000">3,000,000</option>
													<option value="3250000">3,250,000</option>
										
													<option value="3500000">3,500,000</option>
													<option value="3750000">3,750,000</option>
													<option value="4000000">4,000,000</option>
													<option value="4250000">4,250,000</option>
													<option value="4500000">4,500,000</option>
													<option value="4750000">4,750,000</option>
										
													<option value="5000000">5,000,000</option>
													<option value="6000000">6,000,000</option>
													<option value="7000000">7,000,000</option>
													<option value="8000000">8,000,000</option>
													<option value="9000000">9,000,000</option>
													<option value="10000000">10,000,000</option>
													
													<option value="">No max</option>
												</select>
											</div>
											
											<div class="numBeds">
                                            	<label for="min_price" class="thinOnly">Minimum Beds</label>
												<label for="num_beds">min-Beds</label>
												<select name="minbed" tabindex="4" title="Minimum number of bedrooms">
													<option selected="selected" value="">No min</option>
													<option value="1">1 </option>
													<option value="2">2 </option>
													<option value="3">3 </option>
													<option value="4">4 </option>
													<option value="5">5 </option>
													<option value="6">6 </option>
												</select>
											</div>
											
											<div class="numBaths">		
												<label for="num_baths">max-beds</label>
												<select name="maxbed" tabindex="5" title="Minimum number of bathrooms">
													<option selected="selected" value="">No min</option>
													<option value="1">1 </option>
													<option value="2">2 </option>
													<option value="3">3 </option>
													<option value="4">4 </option>
													<option value="5">5 </option>
													<option value="6">6 </option>
												</select>
											</div>
										</div>
										
										
											
												<!-- Needs to by submit type so the enter key will work correctly -->
												<input type="submit" name="thinSubmit" value="Search" tabindex="6" class="mobile-search-button thinOnly Button primary large basic-border-radius clickable">												
											
											
																				
									</form>
</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>


</body>
</html>
