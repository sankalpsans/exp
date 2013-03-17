$(function(){
				$('body').on('keyup', function(e){
					if(e.keyCode == 27)
					 {
						$('.begin').focus();
					 }
				});
				
				$('.invalid').on('click', function(){
					return false;
				});
				
				/*
				 *	Focus Experience
				 *
				 */
				$('.input, select, .edit_value').on('focus', function(){
					$(this.parentNode.parentNode.parentNode).addClass('hovered');
				});
				
				$('.input, select, .edit_value').on('blur', function(){
					$(this.parentNode.parentNode.parentNode).removeClass('hovered');
				});
				
				$('.unacc').on('focus', function(){
					$('.proceed').focus();
				});
				
				
				
				/*		Calculation Validate		*/
				
				
				function validate()
					{
						var total = $('.begin')[0].value;
						var sum = 0;
						/*	Aggregate all expenditures here	*/
						$('.edit_value').each(function(){
							sum += this.value * 1;
						});
						if(total == sum)
							{
								$('.btn').removeClass('invalid');
								$('.btn').addClass('valid');
								$('.btn').val('Proceed');
							}
						else
							{
								$('.btn').addClass('invalid');
								$('.btn').removeClass('valid');
							}
						$('.unaccounted').find('input')[0].value = total - sum;
					}
				
				$('.number').on('keyup', function(){
					
					validate();
					
				});
				
				$('.number').on('keydown', function(e){
					if(e.keyCode == 40)
						{
							if(this.value == 0)
								{
								 return;
								}
							this.value = this.value * 1 - 1;
						}
					if(e.keyCode == 38)
						{
							this.value = this.value * 1 + 1;
						}
					else;
					validate();
				});
				$('.begin').focus();
			});
			
				
				
				/*
				 *		Proceed Experience
				 *
				 */
				
				
		function proceed()
			{
				
			}
			
var expense_set = {
	"id": 123,
	"name": "H69 Trip to Nagarjuna Sagar",
	"expense":
				
				{
					"food":	[
							 {
								 "expense":100,
								 "desc":"Dosa",
								 "date":"11/23/2012"
							 },
							 {
								 "expense":200,
								 "desc":"Chocolates",
								 "date":"11/23/2012"
							 }
							],
					"travel":233,
					"unaccounted":100,
					"lent":123
					}
				
};


function get_(id)
	{
		$($('.wrap')[0]).fadeOut(function()
		{
			$($('.wrap')[0]).html('<img style = "margin-left: 342px;margin-top: 148px;" src = "gui/images/loading.gif">');
			$($('.wrap')[0]).fadeIn();
			$.ajax({
						url: 'exp_set/'+id,
						success: function(html)
							{
								//console.log(html);
								var exp = jQuery.parseJSON(html);
								console.log(exp);
							}
					});
		});
		
		
	}
/*
	Suggested Table structure:
		expense_group:
			user_id, id, name, expense_id
		expense:
			expense, desc, date
		user:
			id, password
*/