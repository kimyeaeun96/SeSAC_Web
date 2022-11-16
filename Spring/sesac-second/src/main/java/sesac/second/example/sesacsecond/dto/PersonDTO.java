package sesac.second.example.sesacsecond.dto;

import lombok.Getter;
import lombok.Setter;

@Getter // 클래스 위에 적으면 클래스 전체에 적용함.
@Setter
public class PersonDTO {
        private String name;
        private String gender;

        // lombok을 이용해 코드를 줄인다.
//        public String getName() {return name;};
//        public void setName(String name) {this.name = name;}
//        public int getAge() {return age;}
//        public void setAge(int age) {this.age = age;}
}
