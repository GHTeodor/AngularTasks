import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.scss']
})
export class DirectivesPipesComponent {
  text: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi commodi consectetur corporis, dolor doloribus eaque eligendi error esse impedit in incidunt, itaque iure iusto libero magni mollitia nam natus, pariatur quam reiciendis temporibus veniam voluptas voluptate voluptatum? Ab aliquam asperiores deleniti dolore doloremque incidunt ipsam laboriosam maiores nulla odit, quaerat, quis reiciendis temporibus! Aliquam debitis dignissimos explicabo necessitatibus provident reiciendis saepe suscipit! At deleniti ex id impedit, iusto libero quos reiciendis tempora? Accusantium beatae cupiditate dolorem ea est ex incidunt ipsam, iste iusto nemo nihil nisi non officiis omnis praesentium quae quos, tempora tenetur voluptate voluptatum. Aliquam, fuga, quos.";
  titles: string[] = ["Normal (no reverse):", "Reverse (words):", "Full-reverse (letters):"];
}
