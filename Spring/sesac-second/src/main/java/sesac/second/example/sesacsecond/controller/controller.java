package sesac.second.example.sesacsecond.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.second.example.sesacsecond.VO.PersonVO;
import sesac.second.example.sesacsecond.dto.PersonDTO;

import java.sql.Array;
import java.util.*;

@Controller
public class controller {
    @GetMapping("hello")
    public String iogyiubu(Model model){
        model.addAttribute("text", "hihihi");
        model.addAttribute("utext", "<strong>utext</strong>");
        String[] names = {"kim", "lee", "park"};
        model.addAttribute("names", names);
        return "hello";
    }

    @GetMapping("api")
    public String getApi(@RequestParam(value="name", required = false) String n, Model model){
        model.addAttribute("name", n);
        return "api";
    }

    @GetMapping("api2/{n}")
    public String getApi2(@PathVariable("n") String nn, Model model) {
        model.addAttribute("name", nn);
        return "api";
    }
// ---------------------------------------------------------------
    // 11월 16일 DAO DTO VO 수업
    @GetMapping("form")
    public String getForm(){
        return "form";
    }

    @PostMapping("form-param1")
    public String postForm1(
            @RequestParam String name,
            @RequestParam String gender,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        return "result";
    }
    // 일반 form 전송, RequestParam
    @PostMapping("form-param2")
    public String postForm3(
            @RequestParam String name,
            @RequestParam String gender,
            Model model ){
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        return "result";
    }

    @PostMapping("form-dto1")
    @ResponseBody
    public PersonDTO postDto1(
            @RequestBody PersonDTO person,
            Model model ){
        //    model.addAttribute("name", person.getName());
        //  model.addAttribute("gender", person.getGender());
        //return "result";
        return person;
    }

    @PostMapping("form-dto2")
    public String postDto2(
            PersonDTO person,
            Model model ){
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return "result";
    }

    @PostMapping("form-vo1")
    @ResponseBody
    public PersonVO postVo1(
            @RequestBody PersonVO person,
            Model model ){
        //    model.addAttribute("name", person.getName());
        //  model.addAttribute("gender", person.getGender());
        //return "result";
        return person;
    }

    @PostMapping("form-vo2")
    public String postVo2(
            PersonVO person,
            Model model ){
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return "result";
    }
    //------------------------------------------------------------------
    //실습1. Thymeleaf(1)
    @GetMapping("thyme")
    public String getThyme(Model model){
        model.addAttribute("age",16);
        return "prcThymeleaf";
    }
//    실습2. Thymeleaf(2)
    @GetMapping("people")
    public String people(Model model){
        List<Person> people = new ArrayList<>();
        people.add(new Person("kim",10));
        people.add(new Person("lee",20));
        people.add(new Person("hong",30));
        people.add(new Person("park",40));
        people.add(new Person("shin",50));
        // add data to view
        model.addAttribute("people", people);
        return "prcThymeleaf";
    }
    //실습3. API-GET
    @GetMapping("introduce/{name}")
    public String getPrc(@PathVariable("name") String name, Model model){
        return "prc37";
    }

    @GetMapping("introduce2")
    public String getPrc2(@RequestParam(value="name", required = false) String name,
                          @RequestParam(value="age", required = false) int age,
                          Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "prc37";
    }
    class Person {
        public String name;
        public int age;
        public Person(String name, int age){
            this.name = name;
            this.age = age;
        }
    }
}
