import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { StlRenderer } from "./test_scene";


const stlRenderer=new StlRenderer();

function animate() {
  requestAnimationFrame( animate );
  stlRenderer.render();
}


@Component({
  selector: "sol-view3-d",
  templateUrl: "./view3-d.component.html",
  styleUrls: ["./view3-d.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class View3DComponent implements OnInit, AfterViewInit {
  @ViewChild("3dDraw", { static: true })
  drawElement: ElementRef<HTMLCanvasElement>;
  @ViewChild("3dDraw1", { static: true })
  drawElement1: ElementRef<HTMLCanvasElement>;


  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    this.drawElement.nativeElement.appendChild(stlRenderer.renderer.domElement);
 // stlRenderer.loadStl("/assets/3d/usb.STL");
   stlRenderer.load3MF("/assets/3d/USB3.3MF");
    animate()
  }


}


