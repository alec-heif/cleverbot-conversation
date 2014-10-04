package com.google.code.chatterbotapi.test;

import com.google.code.chatterbotapi.*;
import java.io.*;


public class ChatterBotApiTest {
    
    public static void main(String[] args) throws Exception {

        botsession = getSession();

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line;
        while((line = br.readLine())! = null){
            System.out.println(botsession.think(line));
        }
    }
    public static ChatterBotSession getSession(){
        Random rand = new Random();
        int randomNum = rand.nextInt(2);

        ChatterBotFactory factory = new ChatterBotFactory();
        if (randomNum == 1){
            ChatterBot bot1 = factory.create(ChatterBotType.CLEVERBOT);
        }else{
            ChatterBot bot1 = factory.create(ChatterBotType.PANDORABOTS, "b0dafd24ee35a477");
        }
        ChatterBotSession botsession = bot1.createSession();
        return botsession;
    }
}