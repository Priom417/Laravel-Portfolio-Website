<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\VisitorModel;
use App\ServicesModel;

class HomeController extends Controller
{
    function HomeIndex(){
        // Ip Get
        $UserIP=$_SERVER['REMOTE_ADDR'];

        // Date Time
        date_default_timezone_set("Asia/Dhaka");
        $timeDate= date("Y-m-d h:i:sa");

        //Insert Visiting Data in visitor table
        VisitorModel::insert(['ip_address'=>$UserIP,'visit_time'=>$timeDate]);

        //Get Services Data
        $ServicesData = json_decode(ServicesModel::all());

        return view('Home',[
            'ServicesData'=>$ServicesData
        ]);

    }
}
