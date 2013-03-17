<?php session_start(); ?>
<?php
class startapp {

static function index() {
	$template='welcome.htm';
	include_once('gui/layout.htm');
	}

	
	/*
	 *
	 *	Get an Expense Set in JSON
	 *
	 */
function exp_set()
	{
//		echo time();
		if(!f3::get('PARAMS.id'))
			{
				echo '["null"]';
				return 0;
			}
		$es = f3::get('PARAMS.id');
		/*
		 *  //TODO//
		 *
		 *	Check for access rights Here
		 *
		 */
		 
		$expense_set = f3::sql('select * from `expense_set` where `id` = "'.$es.'"');
		$expense_list = f3::sql('select * from `expense` where `set_id` = "'.$es.'"');
		if(count($expense_set) == 0)
		 {
		  return;
		 }
		
		$expense_set_array['id'] = $expense_set[0]['id'];
		$expense_set_array['owner'] = $expense_set[0]['owner'];
		$expense_set_array['desc'] = $expense_set[0]['desc'];
		$i = 0;
		while($i < count($expense_list))
			{
				$expense_list_array[$i]['id'] = $expense_list[$i]['id'];
				$expense_list_array[$i]['desc'] = $expense_list[$i]['desc'];
				$expense_list_array[$i]['category_id'] = $expense_list[$i]['category_id'];
				$expense_list_array[$i]['money'] = $expense_list[$i]['money'];
				
				$i++;
			}
		$expense_set_array['expense_list'] = $expense_list_array;
		$ret = json_encode($expense_set_array);
		echo $ret;
		
	}



}

?>