package sesac.spring.study.sesacspringstudy.controller;

import lombok.extern.flogger.Flogger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller // annotation 컨트롤러의 역할을 스프링에게 알려준다. 꼭 써줘야 실행됨!!!
public class HelloController {
    @GetMapping("hi") // get URL hi
    public String getHi(Model model){ // 톰캣서버가 모델에서 정보를 받고 view로 보낸다.
        model.addAttribute("text", "hihihi"); // th:text="${text}"
        model.addAttribute("ㅕtext", "<strong>utext</strong>>");
        String[] names = {"kim", "lee", "park"};
        model.addAttribute("names", names);
        return "hi"; // [template] - hi.html
    }
    @GetMapping("hello")
    public String getHi2(){
        Person person = new Person();
        return "hi";
    }

    class Person {

    }
}
