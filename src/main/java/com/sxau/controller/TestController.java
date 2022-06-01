package com.sxau.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @DateTime: 2022/5/29 15:27
 * @Description:
 * @Author: zy
 */
@Slf4j
@Controller
public class TestController {
    @RequestMapping(path = "/git")
    public String git(){
        log.info("进入了此方法");
        return "/GitUse";
    }
}
